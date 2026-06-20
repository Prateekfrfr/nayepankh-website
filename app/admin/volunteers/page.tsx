import { AlertCircle } from "lucide-react";
import { AdminVolunteerTable } from "@/components/AdminVolunteerTable";
import { FadeIn } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { connectToDatabase } from "@/lib/mongodb";
import type { VolunteerRecord } from "@/lib/volunteer-validation";
import { Volunteer } from "@/models/Volunteer";

export const dynamic = "force-dynamic";

async function getVolunteers(): Promise<{
  volunteers: VolunteerRecord[];
  error: string;
}> {
  try {
    await connectToDatabase();
    const volunteers = await Volunteer.find({})
      .sort({ createdAt: -1 })
      .lean();

    return {
      volunteers: volunteers.map((volunteer) => ({
        id: volunteer._id.toString(),
        fullName: volunteer.fullName,
        email: volunteer.email,
        phone: volunteer.phone,
        college: volunteer.college,
        skills: volunteer.skills,
        availability: volunteer.availability,
        motivation: volunteer.motivation,
        createdAt: (volunteer.createdAt ?? new Date()).toISOString(),
      })),
      error: "",
    };
  } catch (error) {
    const message =
      error instanceof Error && error.message.includes("MONGODB_URI")
        ? "Volunteer storage is not configured."
        : "Unable to load volunteer registrations right now.";

    return { volunteers: [], error: message };
  }
}

export default async function AdminVolunteersPage() {
  const { volunteers, error } = await getVolunteers();

  return (
    <main>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionTitle
            eyebrow="Admin"
            title="Review volunteer registrations as they arrive."
          >
            Search and manage real volunteer submissions collected through the
            website registration form.
          </SectionTitle>
        </div>
      </section>

      <section className="soft-grid px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {error && (
            <FadeIn className="mb-6 flex gap-4 rounded-[1.5rem] border border-orange-200 bg-orange-50 p-5 text-naye-blue">
              <AlertCircle className="mt-0.5 shrink-0 text-naye-orange" />
              <div>
                <h2 className="font-black">Dashboard data unavailable</h2>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                  {error}
                </p>
              </div>
            </FadeIn>
          )}
          <AdminVolunteerTable volunteers={volunteers} />
        </div>
      </section>
    </main>
  );
}
