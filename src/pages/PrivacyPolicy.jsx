import { Link } from "react-router-dom";
import { IconBack } from "../icons";
import { useSiteTheme, FONTS_LINK } from "../theme";

const SUPPORT = "support@fitcrave.co";

export default function PrivacyPolicy() {
  const { t, SF, SS, SM, acT } = useSiteTheme();

  const W = { maxWidth: 800, margin: "0 auto", padding: "0 32px" };
  const hd = { fontFamily: SF, fontStyle: "italic", fontSize: "1.3rem", marginTop: 40, marginBottom: 14, color: t.tx };
  const sub = { fontFamily: SS, fontWeight: 700, fontSize: ".95rem", marginTop: 24, marginBottom: 10, color: t.tx };
  const pg = { fontSize: ".88rem", lineHeight: 1.85, color: t.tx2, marginBottom: 12 };
  const li = { fontSize: ".88rem", lineHeight: 1.85, color: t.tx2, marginBottom: 10, paddingLeft: 4 };
  const link = { color: t.ac, fontWeight: 600, textDecoration: "none" };

  return (
    <div style={{ fontFamily: SS, background: t.bg, color: t.tx, minHeight: "100vh" }}>
      <link href={FONTS_LINK} rel="stylesheet" />
      <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80 }}>
        <div style={W}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "none",
              border: `1px solid ${t.bd}`,
              borderRadius: 10,
              padding: "8px 18px",
              cursor: "pointer",
              color: t.tx2,
              fontSize: ".8rem",
              fontWeight: 600,
              fontFamily: SM,
              marginBottom: 32,
              textDecoration: "none",
            }}
          >
            <IconBack /> Back to Home
          </Link>

          <div style={{ marginBottom: 48 }}>
            <span style={{ fontFamily: SM, fontSize: ".62rem", fontWeight: 700, color: t.ac, letterSpacing: ".14em", textTransform: "uppercase" }}>
              LEGAL
            </span>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.1, letterSpacing: "-.04em", marginTop: 14 }}>
              <span style={{ fontFamily: SS, fontWeight: 800 }}>Privacy </span>
              <span style={{ fontFamily: SF, fontStyle: "italic", ...acT }}>Policy</span>
            </h1>
            <p style={{ fontFamily: SM, fontSize: ".68rem", color: t.tx3, marginTop: 12 }}>
              Last updated: October 2026 · FitCrave Pvt. Ltd.
            </p>
          </div>

          <p style={pg}>
            FitCrave Pvt. Ltd. ("FitCrave", "we", "us") operates the FitCrave consumer app, the FitCrave Partner
            delivery app, Kitchen OS, and fitcrave.co.in. This Privacy Policy explains what personal data we collect,
            why we collect it, how we use and share it, and your choices. By using FitCrave products you agree to this policy.
          </p>

          <h2 style={hd}>1. Information we collect</h2>
          <h3 style={sub}>1.1 Account and profile</h3>
          <p style={pg}>
            When you create an account we collect identifiers needed to sign you in and personalize the app: phone number
            (OTP), Google or Apple account details, email address if you provide one, display name, and profile photo if you
            upload one. Profile details you enter (age, sex, height, weight, goals, diet type, allergies, activity level,
            workout preferences) are stored to generate meal and workout plans.
          </p>
          <h3 style={sub}>1.2 Health and fitness data</h3>
          <p style={pg}>
            If you connect Google Health Connect (Android) or Apple Health (iOS), we request read access to steps, active
            calories burned, sleep, heart rate, resting heart rate, and related health-history records needed to backfill
            recent days. We also read steps from the on-device pedometer when you allow activity recognition. You may enter
            steps, calories, sleep, and resting heart rate manually. Meal logs (including photos of food, barcode product
            data from Open Food Facts, and mess-menu photos), workout logs, and derived metrics such as calorie targets and
            health score are stored in your account. We use this data only to show your dashboard, plans, and AI coach
            context — not for advertising.
          </p>
          <h3 style={sub}>1.3 Location</h3>
          <p style={pg}>
            In the consumer app, with your permission we collect precise or approximate location to show local weather on Home
            and to discover nearby community groups. Location is not used for ads. You can deny location; those features will
            be limited.
          </p>
          <h3 id="delivery-partner" style={sub}>1.3a FitCrave Partner (delivery) app</h3>
          <p style={pg}>
            If you use FitCrave Partner as a delivery rider, we collect the data needed to sign you in, assign and complete
            deliveries, pay you, and keep you safe:
          </p>
          <ul style={{ margin: "0 0 20px 20px", padding: 0 }}>
            <li style={li}>Account: mobile number (verified by a one-time SMS code), full name, vehicle type and assigned kitchen.</li>
            <li style={li}>Sign-up and payout details: bank account number, IFSC code and account holder name, driving licence number and photo, and a selfie, so your kitchen can verify you and we can pay you. We do not collect Aadhaar.</li>
            <li style={li}>Precise location while you are online. When you go online the app shows a persistent "You're online" notification and shares your location with our servers about every 10–15 seconds, including when the screen is off or the app is in the background. Sharing stops when you go offline or log out. Your kitchen sees where online riders are; a customer sees your location only while their order is out for delivery. We do not collect location while you are offline and do not use the "background location" permission.</li>
            <li style={li}>Order activity: when you accept, reach the kitchen, pick up, reach the customer and deliver, cash or UPI you collect, ratings you give customers, and the pay calculated for each trip (base, distance and waiting time) and your weekly payouts.</li>
            <li style={li}>Camera photos you take as proof of delivery or when a drop-off cannot be completed. We do not request access to your full photo library.</li>
            <li style={li}>Emergency (SOS): if you press SOS, the app calls 112 and sends your current location, name and phone number to your kitchen so staff can reach you.</li>
            <li style={li}>Device: a push-notification token so new orders can ring your phone (including full-screen alerts if you allow them), and crash reports (Firebase Crashlytics) linked to your rider ID so we can fix problems.</li>
          </ul>
          <p style={pg}>
            Your name, phone number and location are shared with your kitchen; your first name, vehicle and live location are
            shown to the customer of an order you are delivering. While you are delivering an order you can see that
            customer's phone number (from pickup until 30 minutes after delivery) so you can call them; the app does not
            store it. Bank and identity details are used only for verification and payouts and are visible only to FitCrave
            staff who handle them. We do not use Partner data for advertising.
          </p>
          <h3 style={sub}>1.4 Camera and media you choose</h3>
          <p style={pg}>
            Camera access is used for meal photos, barcode scanning, mess-menu scanning, and community posts. We do not get
            access to your full photo library. When you pick an image or video, you choose specific items through the system
            picker.
          </p>
          <h3 style={sub}>1.5 Community content</h3>
          <p style={pg}>
            Posts, comments, likes, group membership, and media you upload to Community are stored on our servers so other
            members can see them. Other users can report content and block you.
          </p>
          <h3 style={sub}>1.6 Orders and payments</h3>
          <p style={pg}>
            If you order food we collect delivery name, phone, address (including the pinned map location), city, pin code,
            cart contents, and order status. The rider delivering your order can see your phone number from pickup until 30
            minutes after delivery so they can call you, and sees your live delivery address; the rider app does not store
            your number.
            Payment is handled by Cashfree. We receive payment status and identifiers needed to confirm the order; we do not
            store your full card or UPI PIN.
          </p>
          <h3 style={sub}>1.7 Device, notifications, and diagnostics</h3>
          <p style={pg}>
            We collect device type, OS version, app version, language, crash and performance logs, and Firebase Cloud
            Messaging tokens so we can send order, meal, and workout notifications if you allow them. Firebase Analytics may
            collect app-usage events. We do not sell this data.
          </p>

          <h2 style={hd}>2. How we use information</h2>
          <ul style={{ margin: "0 0 20px 20px", padding: 0 }}>
            <li style={li}>Create and secure your account; send OTPs and sign-in emails.</li>
            <li style={li}>Generate and update meal plans, workout plans, grocery lists, and AI coach replies.</li>
            <li style={li}>Show calories, steps, sleep, heart-rate summaries, and progress on Home and in plans.</li>
            <li style={li}>Operate Community (groups, posts, reports, blocks) and food ordering / delivery tracking.</li>
            <li style={li}>Send notifications you enable; prevent fraud and abuse; debug crashes; improve the product.</li>
            <li style={li}>Comply with law and respond to account-deletion and support requests.</li>
          </ul>
          <p style={pg}>
            We do not use Health Connect, Apple Health, or other health data to show ads, and we do not sell personal data.
          </p>

          <h2 style={hd}>3. Sharing</h2>
          <p style={pg}>
            We share data with processors who help us run FitCrave, only as needed for their task:
          </p>
          <ul style={{ margin: "0 0 20px 20px", padding: 0 }}>
            <li style={li}>Google Firebase (Authentication, Firestore, Cloud Storage, Cloud Messaging, Analytics, App Check / Play Integrity).</li>
            <li style={li}>Google Cloud (API hosting) and MongoDB Atlas (community profiles, posts, comments).</li>
            <li style={li}>Google Gemini / generative AI providers to create plans, meal-photo estimates, and coach replies using the context you have in the app.</li>
            <li style={li}>Cashfree for payments; Google Maps for order tracking maps; Open Food Facts for packaged-food lookup.</li>
            <li style={li}>Kitchen and delivery partners, only order and drop-off details required to fulfill a bowl order (including your phone number for the rider, from pickup until 30 minutes after delivery).</li>
          </ul>
          <p style={pg}>
            We may disclose information if required by law or to protect users from fraud or serious harm. Community posts
            you publish are visible to other members of that group.
          </p>

          <h2 style={hd}>4. Retention and security</h2>
          <p style={pg}>
            We keep account and app data while your account is open. When you delete your account in the FitCrave app
            (or after a verified email deletion request), we delete or anonymize personal data as described on the{" "}
            <Link to="/account-deletion" style={link}>account deletion page</Link>
            , typically promptly for in-app deletion or within 7 business days for email requests, except backups (up to 30 days)
            and data we must keep for legal, tax, or fraud reasons. We use HTTPS in transit and restrict staff access. No method
            of storage is 100% secure.
          </p>

          <h2 style={hd}>5. Your rights and choices</h2>
          <p style={pg}>
            You can access and update profile, meal, and workout preferences in the consumer app. Delivery partners can go
            offline at any time from FitCrave Partner, which stops location sharing, and can ask their kitchen or support
            to update bank or vehicle details or close their rider account. You can disconnect Health Connect or Apple Health, deny camera, location, or
            notification permission, and log out. You may delete your consumer account in the app from Profile → Delete
            account (or Help &amp; Support → Delete account). You may also request deletion via the{" "}
            <Link to="/account-deletion" style={link}>account deletion page</Link>
            {" "}or{" "}
            <a href={`mailto:${SUPPORT}`} style={link}>{SUPPORT}</a>. You can report community posts and comments and block users in the app.
          </p>

          <h2 style={hd}>6. Children</h2>
          <p style={pg}>
            FitCrave is not directed at children under 18. We do not knowingly collect personal data from children under 18.
            If you believe we have, contact {SUPPORT} and we will delete it.
          </p>

          <h2 style={hd}>7. Health disclaimer</h2>
          <div style={{ background: t.bg2, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "24px 22px", margin: "16px 0 24px" }}>
            <p style={{ ...pg, fontWeight: 600, color: t.warn, marginBottom: 8 }}>Not medical advice</p>
            <p style={{ ...pg, marginBottom: 0 }}>
              FitCrave is a fitness and nutrition technology product. Plans, scores, and AI suggestions are informational.
              They are not medical advice. Talk to a qualified clinician before major diet or exercise changes.
            </p>
          </div>

          <h2 style={hd}>8. Changes</h2>
          <p style={pg}>
            We may update this policy. The "Last updated" date will change. Continued use after an update means you accept
            the revised policy.
          </p>

          <h2 style={hd}>9. Contact</h2>
          <p style={pg}>
            FitCrave Pvt. Ltd., IIT Kharagpur, West Bengal, India ·{" "}
            <a href={`mailto:${SUPPORT}`} style={link}>{SUPPORT}</a>
            {" "}· See also our{" "}
            <Link to="/terms" style={link}>Terms of Use</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
