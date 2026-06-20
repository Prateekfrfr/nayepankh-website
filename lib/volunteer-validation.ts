export type VolunteerInput = {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  skills: string;
  availability: string;
  motivation: string;
};

export type VolunteerRecord = VolunteerInput & {
  id: string;
  createdAt: string;
};

export type VolunteerValidationResult =
  | { valid: true; data: VolunteerInput }
  | { valid: false; errors: Partial<Record<keyof VolunteerInput, string>> };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const indianPhoneRegex = /^(?:\+91[-\s]?)?[6-9]\d{9}$/;

const labels: Record<keyof VolunteerInput, string> = {
  fullName: "Full name",
  email: "Email address",
  phone: "Phone number",
  college: "College / Organization",
  skills: "Skills",
  availability: "Availability",
  motivation: "Motivation",
};

const maxLengths: Record<keyof VolunteerInput, number> = {
  fullName: 120,
  email: 160,
  phone: 16,
  college: 160,
  skills: 600,
  availability: 160,
  motivation: 1000,
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function normalizePhone(phone: string) {
  const compact = phone.replace(/[\s-]/g, "");
  return compact.startsWith("+91") ? compact.slice(3) : compact;
}

export function validateVolunteerInput(input: unknown): VolunteerValidationResult {
  const candidate = input as Partial<Record<keyof VolunteerInput, unknown>>;
  const data: VolunteerInput = {
    fullName: readString(candidate.fullName),
    email: readString(candidate.email).toLowerCase(),
    phone: normalizePhone(readString(candidate.phone)),
    college: readString(candidate.college),
    skills: readString(candidate.skills),
    availability: readString(candidate.availability),
    motivation: readString(candidate.motivation),
  };
  const errors: Partial<Record<keyof VolunteerInput, string>> = {};

  (Object.keys(labels) as Array<keyof VolunteerInput>).forEach((field) => {
    if (!data[field]) {
      errors[field] = `${labels[field]} is required.`;
      return;
    }

    if (data[field].length > maxLengths[field]) {
      errors[field] = `${labels[field]} is too long.`;
    }
  });

  if (data.email && !emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone && !indianPhoneRegex.test(data.phone)) {
    errors.phone = "Please enter a valid Indian mobile number.";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return { valid: true, data };
}
