# WHIFF 2.0 MVP setup

## UPI checkout

Edit `payment-config.js` and replace:

`REPLACE_WITH_WHIFF_UPI_ID@upi`

with the real WHIFF UPI ID.

The checkout then generates a payment-specific UPI QR using the exact order amount.

## Verification flow

1. Customer selects a fragrance or The Stages Discovery Set.
2. Checkout calculates the exact amount.
3. Customer scans the UPI QR and pays.
4. Customer enters name, phone, shipping address and UTR.
5. WHIFF creates a local order record with status `AWAITING VERIFICATION`.
6. The customer gets a WhatsApp message containing the order ID and UTR.
7. WHIFF verifies the payment manually in the UPI app/bank and confirms the order on WhatsApp.

This is intentionally a static-site MVP. It does not claim automatic payment verification.

## Discovery Set

The Discovery Set is now a real checkout path at `/checkout.html?product=discovery` and is priced from `payment-config.js`.

Change `discoveryPrice` and `discoveryShipping` there when the physical fulfilment specification is final.

## AI art direction

The nine Stage pages now have individual colour variables and graphic worlds using the existing WHIFF visual-code system. When final product photography is available, the stage hero worlds can accept real editorial imagery without changing the information architecture.

AI imagery should preserve the actual WHIFF bottle and label as the product master. Generate environments, lighting, materials and editorial scenes around that master rather than asking an image model to invent the packaging typography.
