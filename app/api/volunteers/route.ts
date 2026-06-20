import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { validateVolunteerInput } from "@/lib/volunteer-validation";
import { Volunteer } from "@/models/Volunteer";

export const dynamic = "force-dynamic";

function isMissingMongoUri(error: unknown) {
  return error instanceof Error && error.message.includes("MONGODB_URI");
}

function serializeVolunteer(volunteer: {
  _id: { toString: () => string };
  fullName: string;
  email: string;
  phone: string;
  college: string;
  skills: string;
  availability: string;
  motivation: string;
  createdAt: Date;
}) {
  return {
    id: volunteer._id.toString(),
    fullName: volunteer.fullName,
    email: volunteer.email,
    phone: volunteer.phone,
    college: volunteer.college,
    skills: volunteer.skills,
    availability: volunteer.availability,
    motivation: volunteer.motivation,
    createdAt: volunteer.createdAt.toISOString(),
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON request body." },
      { status: 400 },
    );
  }

  const validation = validateVolunteerInput(body);

  if (!validation.valid) {
    return NextResponse.json(
      {
        message: "Please correct the highlighted fields.",
        errors: validation.errors,
      },
      { status: 400 },
    );
  }

  try {
    await connectToDatabase();
    const volunteer = await Volunteer.create(validation.data);

    return NextResponse.json(
      {
        message: "Volunteer registration received.",
        volunteer: serializeVolunteer(volunteer),
      },
      { status: 201 },
    );
  } catch (error) {
    if (isMissingMongoUri(error)) {
      return NextResponse.json(
        { message: "Volunteer storage is not configured." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { message: "Unable to save volunteer registration right now." },
      { status: 500 },
    );
  }
}
