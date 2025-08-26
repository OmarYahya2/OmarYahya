# Frontend Setup for Omar Yahya Portfolio

## Environment Variables

Create a `.env.local` file in the root directory with:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://backpro-bjzn.onrender.com
```

## Changes Made

1. **Updated Contact Form**: Now uses the production API endpoint
2. **Added API Configuration**: Centralized API URL management in `lib/config.ts`
3. **Enhanced Error Handling**: Better logging and error messages
4. **Environment Variable Support**: Easy switching between development and production

## Deployment

After updating the code:

1. Push changes to your GitHub repository
2. Vercel will automatically redeploy
3. The contact form will now work with the production backend

## Testing

1. Open the browser developer tools (F12)
2. Go to the Console tab
3. Submit the contact form
4. Check the console logs for detailed information about the request

## API Endpoints

- **Production**: `https://backpro-bjzn.onrender.com/api/contact/`
- **Development**: `http://127.0.0.1:8000/api/contact/`
