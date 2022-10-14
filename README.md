# Portfolio Interface

This is a portfolio interface that provides a starting point for a webapp that uses typescript, react, and less.
This interface is made from Markaronin's generic-interface on github.

To start the webpack dev server, run `yarn dev`

To deploy this, you'll want to run `yarn build` and deploy the `public` folder to a static server.

The abstracted content for each section of the site is found in the `src/Content/...` files. If you want to add sections, make sure to edit the header component accordingly.

The styles are found in the `src/Styles/...` files. The MainStyles.less maintains the color scheme and imports all the other style files.

MAKE SURE PUT IN YOUR OWN EMAIL SMTP ACCESS TOKEN so that anyone who tries to contact you through the site sends an email to YOUR email, not mine!
Get your email smtp access token at `https://postmail.invotes.com/`
