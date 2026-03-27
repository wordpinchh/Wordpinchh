import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    
    // Extract form data
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const website = data.get('website') as string;
    const challenge = data.get('challenge') as string;
    
    // Log the submission (you can also store in database)
    console.log('Contact Form Submission:', {
      name,
      email,
      website,
      challenge,
      timestamp: new Date().toISOString()
    });
    
    // Vercel automatically handles form submissions
    // You'll receive email notifications in your Vercel dashboard
    // Configure email in Vercel project settings
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit form' 
    }, { status: 500 });
  }
}
