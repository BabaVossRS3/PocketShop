// // /app/api/admin/users/[userId]/[action]/route.js
// import { NextResponse } from 'next/server';
// import { db } from './../../../../../lib/index';
// import { eq, and } from 'drizzle-orm';
// import { shops, users, subscriptions } from './../../../../../lib/schema/schema';
// import { sendEmail } from './../../../../../lib/email'; // You'll need to implement this
// import { stripe } from './../../../../../lib/stripe'; // You'll need to implement this

// // Helper to validate admin session
// async function validateAdminSession(request) {
//   // Get session and verify admin role
//   const session = await getSession(request);
//   if (!session || session.user.role !== 'admin') {
//     return false;
//   }
//   return true;
// }

// // Helper to send approval email
// async function sendApprovalEmail(user, shop) {
//   await sendEmail({
//     to: user.email,
//     subject: 'Your Shop Has Been Approved!',
//     html: `
//       <h1>Congratulations ${user.firstName}!</h1>
//       <p>Your shop "${shop.name}" has been approved and is now active.</p>
//       <p>You can access your shop dashboard at: https://${shop.subdomain}.pocketshop.gr/admin</p>
//     `
//   });
// }

// // Helper to send denial email
// async function sendDenialEmail(user, shop, reason = '') {
//   await sendEmail({
//     to: user.email,
//     subject: 'Shop Application Status Update',
//     html: `
//       <h1>Hello ${user.firstName},</h1>
//       <p>We regret to inform you that your shop "${shop.name}" application has been denied.</p>
//       ${reason ? `<p>Reason: ${reason}</p>` : ''}
//       <p>If you have any questions, please contact our support team.</p>
//     `
//   });
// }

// // Helper to send payment request email
// async function sendPaymentRequestEmail(user, shop, paymentLink) {
//   await sendEmail({
//     to: user.email,
//     subject: 'Payment Required for Your Shop',
//     html: `
//       <h1>Hello ${user.firstName},</h1>
//       <p>This is a reminder that payment is required for your shop "${shop.name}".</p>
//       <p>Please complete your payment using the following link:</p>
//       <a href="${paymentLink}">Complete Payment</a>
//     `
//   });
// }

// export async function POST(request, { params }) {
//   try {
//     const { userId, action } = params;
    
//     // Validate admin session
//     const isAdmin = await validateAdminSession(request);
//     if (!isAdmin) {
//       return NextResponse.json(
//         { error: 'Unauthorized' },
//         { status: 401 }
//       );
//     }

//     // Get user and related shop data
//     const userData = await db
//       .select()
//       .from(users)
//       .where(eq(users.id, parseInt(userId)))
//       .leftJoin(shops, eq(users.id, shops.ownerId))
//       .leftJoin(subscriptions, eq(shops.id, subscriptions.shopId))
//       .execute();

//     if (!userData || userData.length === 0) {
//       return NextResponse.json(
//         { error: 'User not found' },
//         { status: 404 }
//       );
//     }

//     const user = userData[0].users;
//     const shop = userData[0].shops;
//     const subscription = userData[0].subscriptions;

//     switch (action) {
//       case 'approve':
//         // Update shop status to active
//         await db
//           .update(shops)
//           .set({ 
//             active: true,
//             updatedAt: new Date()
//           })
//           .where(eq(shops.id, shop.id))
//           .execute();

//         // Create initial subscription record if it doesn't exist
//         if (!subscription) {
//           await db
//             .insert(subscriptions)
//             .values({
//               shopId: shop.id,
//               planType: 'free',
//               status: 'active',
//               currentPeriodStart: new Date(),
//               currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
//             })
//             .execute();
//         }

//         // Send approval email
//         await sendApprovalEmail(user, shop);

//         return NextResponse.json({ 
//           message: 'Shop approved successfully' 
//         });

//       case 'deny':
//         // Update shop status to inactive
//         await db
//           .update(shops)
//           .set({ 
//             active: false,
//             updatedAt: new Date()
//           })
//           .where(eq(shops.id, shop.id))
//           .execute();

//         // Get denial reason from request body if provided
//         const { reason } = await request.json();

//         // Send denial email
//         await sendDenialEmail(user, shop, reason);

//         return NextResponse.json({ 
//           message: 'Shop denied successfully' 
//         });

//       case 'requestPayment':
//         // Create Stripe payment link
//         const paymentLink = await stripe.paymentLinks.create({
//           line_items: [{
//             price: 'price_H5ggYwtDq4fbrJ', // Replace with your actual price ID
//             quantity: 1,
//           }],
//           metadata: {
//             shopId: shop.id,
//             userId: user.id,
//           }
//         });

//         // Update subscription status
//         await db
//           .update(subscriptions)
//           .set({ 
//             status: 'pending_payment',
//             updatedAt: new Date()
//           })
//           .where(eq(subscriptions.shopId, shop.id))
//           .execute();

//         // Send payment request email
//         await sendPaymentRequestEmail(user, shop, paymentLink.url);

//         return NextResponse.json({ 
//           message: 'Payment request sent successfully',
//           paymentLink: paymentLink.url
//         });

//       default:
//         return NextResponse.json(
//           { error: 'Invalid action' },
//           { status: 400 }
//         );
//     }
//   } catch (error) {
//     console.error('Error in user action:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

// FOR REAL TIME LATER ON

import { NextResponse } from 'next/server';
import { db } from './../../../../../lib/index';
import { eq } from 'drizzle-orm';
import { shops, users, subscriptions } from './../../../../../lib/schema/schema';

// Προσωρινή παράκαμψη για την επικύρωση διαχειριστή κατά την ανάπτυξη
async function validateAdminSession(request) {
  return true; // Πάντα επιστρέφει true για περιβάλλον ανάπτυξης
}

export async function POST(request, { params }) {
  try {
    const { userId, action } = params;
    console.log('Λήφθηκε αίτημα:', { userId, action });
    
    // Επικύρωση συνεδρίας διαχειριστή
    const isAdmin = await validateAdminSession(request);
    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Μη εξουσιοδοτημένη πρόσβαση' },
        { status: 401 }
      );
    }

    // Ανάκτηση δεδομένων χρήστη και καταστήματος
    const userData = await db
      .select()
      .from(users)
      .where(eq(users.id, parseInt(userId)))
      .leftJoin(shops, eq(users.id, shops.ownerId))
      .leftJoin(subscriptions, eq(shops.id, subscriptions.shopId))
      .execute();

    if (!userData || userData.length === 0) {
      return NextResponse.json(
        { error: 'Ο χρήστης δεν βρέθηκε' },
        { status: 404 }
      );
    }

    const user = userData[0].users;
    const shop = userData[0].shops;
    const subscription = userData[0].subscriptions;

    switch (action) {
      case 'approve':
        // Ενημέρωση κατάστασης καταστήματος σε ενεργό
        await db
          .update(shops)
          .set({ 
            active: true,
            updatedAt: new Date()
          })
          .where(eq(shops.id, shop.id))
          .execute();

        // Δημιουργία αρχικής εγγραφής συνδρομής εάν δεν υπάρχει
        if (!subscription) {
          await db
            .insert(subscriptions)
            .values({
              shopId: shop.id,
              planType: 'free',
              status: 'active',
              currentPeriodStart: new Date(),
              currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 ημέρες
            })
            .execute();
        }

        // Καταγραφή αντί αποστολής email
        console.log('Θα αποστελλόταν email έγκρισης στον:', user.email);

        return NextResponse.json({ 
          message: 'Το κατάστημα εγκρίθηκε με επιτυχία' 
        });

      case 'deny':
        // Ενημέρωση κατάστασης καταστήματος σε ανενεργό
        await db
          .update(shops)
          .set({ 
            active: false,
            updatedAt: new Date()
          })
          .where(eq(shops.id, shop.id))
          .execute();

        // Καταγραφή αντί αποστολής email
        console.log('Θα αποστελλόταν email απόρριψης στον:', user.email);

        return NextResponse.json({ 
          message: 'Το κατάστημα απορρίφθηκε με επιτυχία' 
        });

      case 'requestPayment':
        // Καταγραφή αντί δημιουργίας συνδέσμου πληρωμής Stripe
        console.log('Θα δημιουργούνταν σύνδεσμος πληρωμής για το κατάστημα:', shop.id);

        // Ενημέρωση κατάστασης συνδρομής
        if (subscription) {
          await db
            .update(subscriptions)
            .set({ 
              status: 'pending_payment',
              updatedAt: new Date()
            })
            .where(eq(subscriptions.shopId, shop.id))
            .execute();
        }

        return NextResponse.json({ 
          message: 'Το αίτημα πληρωμής επεξεργάστηκε (λειτουργία ανάπτυξης)',
          paymentLink: 'https://example.com/payment-link' // Προσωρινός σύνδεσμος πληρωμής
        });

      default:
        return NextResponse.json(
          { error: 'Μη έγκυρη ενέργεια' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Σφάλμα στην ενέργεια χρήστη:', {
      message: error.message,
      stack: error.stack
    });
    
    return NextResponse.json(
      { error: error.message || 'Εσωτερικό σφάλμα διακομιστή' },
      { status: 500 }
    );
  }
}
