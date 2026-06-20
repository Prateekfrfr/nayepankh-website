"use client";

import { Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import type { VolunteerRecord } from "@/lib/volunteer-validation";

type AdminVolunteerTableProps = {
  volunteers: VolunteerRecord[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function AdminVolunteerTable({ volunteers }: AdminVolunteerTableProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredVolunteers = useMemo(() => {
    if (!normalizedQuery) {
      return volunteers;
    }

    return volunteers.filter(
      (volunteer) =>
        volunteer.fullName.toLowerCase().includes(normalizedQuery) ||
        volunteer.email.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery, volunteers]);

  return (
    <div className="rounded-[2rem] bg-white p-5 premium-shadow sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-naye-green">
            Registrations
          </p>
          <h2 className="mt-2 text-2xl font-black text-naye-blue">
            Volunteer Management
          </h2>
        </div>

        <label className="relative block lg:min-w-80">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-full border border-slate-200 py-3 pl-11 pr-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-naye-green focus:ring-4 focus:ring-emerald-100"
            aria-label="Search volunteers by name or email"
          />
        </label>
      </div>

      {volunteers.length === 0 ? (
        <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <Users className="mx-auto text-naye-green" size={34} />
          <h3 className="mt-4 text-xl font-black text-naye-blue">
            No volunteer registrations yet
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
            New submissions will appear here after real visitors complete the
            registration form.
          </p>
        </div>
      ) : filteredVolunteers.length === 0 ? (
        <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-xl font-black text-naye-blue">No matches found</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Try searching with a different name or email.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 hidden overflow-hidden rounded-[1.5rem] border border-slate-200 lg:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                <tr>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Phone</th>
                  <th className="px-5 py-4">College / Organization</th>
                  <th className="px-5 py-4">Availability</th>
                  <th className="px-5 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredVolunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="align-top">
                    <td className="px-5 py-4 font-black text-naye-blue">
                      {volunteer.fullName}
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-700">
                      {volunteer.email}
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-700">
                      {volunteer.phone}
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-700">
                      {volunteer.college}
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-700">
                      {volunteer.availability}
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-500">
                      {formatDate(volunteer.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 lg:hidden">
            {filteredVolunteers.map((volunteer) => (
              <article
                key={volunteer.id}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-black text-naye-blue">
                      {volunteer.fullName}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {volunteer.email}
                    </p>
                  </div>
                  <p className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-black text-naye-green">
                    {formatDate(volunteer.createdAt)}
                  </p>
                </div>
                <dl className="mt-5 grid gap-3 text-sm">
                  <div>
                    <dt className="font-black text-naye-blue">Phone</dt>
                    <dd className="mt-1 font-semibold text-slate-600">
                      {volunteer.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-black text-naye-blue">
                      College / Organization
                    </dt>
                    <dd className="mt-1 font-semibold text-slate-600">
                      {volunteer.college}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-black text-naye-blue">Availability</dt>
                    <dd className="mt-1 font-semibold text-slate-600">
                      {volunteer.availability}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
