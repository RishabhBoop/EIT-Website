import { registerUser, createDirectus, rest } from "@directus/sdk";
import { NextResponse } from "next/server";

// Initialize Directus SDK with REST and authentication
const directus = createDirectus(process.env.DIRECTUS_URL).with(
  rest()
);

export async function POST(request) {
  // Parse the request body and extract user data
  const { email, password, first_name, last_name } = await request.json();
  console.log("Registering user:", { email, first_name, last_name });

  try {
    // Create user in Directus
    const directusResponse = await directus.request(registerUser(email, password, {first_name: first_name, last_name: last_name}));

    // Return success response
    return NextResponse.json(
      { message: "successfully resgistered" },
      { status: 200 } // Created
    );
  } catch (error) {
    console.error("Directus Registration Error:", error);
    return NextResponse.json(
      { message: "Registration failed in API" },
      { status: 501 } // Internal Server Error
    );
  }
}
