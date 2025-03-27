# [PayTM Project](https://projects.100xdevs.com/tracks/Paytm/paytm17-3)

## Building any project

### POINTS <hr>
1. Where to start - Feature planning
2. Design UI/UX
    1. UX - First principles/Copy the biggest website out there
    2. UI - Designer. Today there are tools but havent found any good one
3. High level Design
    1. Auth provider
    2. Database
    3. Backend Stack
    4. Frontend stack
    5. Modules you’ll have (common/ui/backend)
    6. Cloud to deploy to
4. LLD
    1. Schema
    2. Route signatures
    3. Frontend Components - debatable
5. ER Diagrams - 
    1. We can build these today, but usually not needed unless you’re a very visual person
6. How to think about features
    1. Usually come from product
    2. If you’re a founder, then just whatever u think is right
7. How much complexity is needed
1. Depends on the size of the company. For a startup, whatever helps you move fast w/o tech debt. For a company there are a lot of layers of review to go through
 
### FEATURE PLANNING <hr>

- <b>User login</b>

1. Auth (In this case, probably email/phone)
2. On ramp from bank, off ramp to bank
3. Support transfers via phone number/name
4. Support scanning a QR code for transferring to merchants

- <b>Merchant login</b>

1. Login with google
2. Generate a QR Code for acceptance
3. Merchants get an alert/notification on payment
4. Merchant gets money offramped to bank every 2 days

### UX <hr>

END User<hr>
1. Login
2. Signup
3. Landing Page
4. User Home Page
5. User Transfer Page 
6. User Account Page
<hr>

Merchant<hr>
1. Log In Google / Github
2. Dashboard
3. Transactions

### Architecture <hr>

- <b>Hot paths</b>
1.  Send money to someone
2. Withdraw balance of merchant
3. Withdraw balance of user back to bank
4. Webhooks from banks to transfer in money
 
- <b>This is ~1 month job for a 2 engineer team.</b> 
- We can cut scope in either
1. UI
2. Number of features we support (remove merchant altogether)
3. Number of services we need (merge bank server, do withdrawals directly and not in a queue assuming banks are always up)

### Stack <hr>

1. Frontend and Backend - Next.js (or Backend)
2. Express - Auxilary backends
3. Turborepo
4. Postgres Database
5. Prisma ORM
6. Tailwind
 