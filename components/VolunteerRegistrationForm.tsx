"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import {
  validateVolunteerInput,
  type VolunteerInput,
} from "@/lib/volunteer-validation";

const initialForm: VolunteerInput = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  skills: "",
  availability: "",
  motivation: "",
};

type FieldErrors = Partial<Record<keyof VolunteerInput, string>>;

const inputClass =
  "rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 outline-none transition focus:border-naye-green focus:ring-4 focus:ring-emerald-100";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <span className="text-xs font-bold text-red-500">{message}</span>;
}

export function VolunteerRegistrationForm() {
  const [form, setForm] = useState<VolunteerInput>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateField =
    (field: keyof VolunteerInput) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      setStatus("");
      setSuccess(false);
    };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setSuccess(false);

    const validation = validateVolunteerInput(form);

    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const result = (await response.json()) as {
        message?: string;
        errors?: FieldErrors;
      };

      if (!response.ok) {
        setErrors(result.errors ?? {});
        setStatus(result.message ?? "Unable to submit registration.");
        return;
      }

      setForm(initialForm);
      setSuccess(true);
      setStatus("Your volunteer registration has been submitted.");
    } catch {
      setStatus("Unable to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-black text-naye-blue">
        Full Name
        <input
          name="fullName"
          value={form.fullName}
          onChange={updateField("fullName")}
          className={inputClass}
          autoComplete="name"
        />
        <FieldError message={errors.fullName} />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-naye-blue">
          Email Address
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField("email")}
            className={inputClass}
            autoComplete="email"
          />
          <FieldError message={errors.email} />
        </label>

        <label className="grid gap-2 text-sm font-black text-naye-blue">
          Phone Number
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={updateField("phone")}
            className={inputClass}
            autoComplete="tel"
          />
          <FieldError message={errors.phone} />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-black text-naye-blue">
        College / Organization
        <input
          name="college"
          value={form.college}
          onChange={updateField("college")}
          className={inputClass}
          autoComplete="organization"
        />
        <FieldError message={errors.college} />
      </label>

      <label className="grid gap-2 text-sm font-black text-naye-blue">
        Skills
        <textarea
          name="skills"
          rows={3}
          value={form.skills}
          onChange={updateField("skills")}
          className={inputClass}
        />
        <FieldError message={errors.skills} />
      </label>

      <label className="grid gap-2 text-sm font-black text-naye-blue">
        Availability
        <input
          name="availability"
          value={form.availability}
          onChange={updateField("availability")}
          className={inputClass}
        />
        <FieldError message={errors.availability} />
      </label>

      <label className="grid gap-2 text-sm font-black text-naye-blue">
        Why do you want to volunteer?
        <textarea
          name="motivation"
          rows={5}
          value={form.motivation}
          onChange={updateField("motivation")}
          className={inputClass}
        />
        <FieldError message={errors.motivation} />
      </label>

      {status && (
        <p
          className={`flex items-center gap-2 text-sm font-semibold ${
            success ? "text-green-600" : "text-red-500"
          }`}
        >
          {success && <CheckCircle2 size={18} />}
          {status}
        </p>
      )}

      <button
        className="inline-flex items-center justify-center gap-2 rounded-full bg-naye-orange px-6 py-4 font-black text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={isSubmitting}
      >
        <Send size={19} />
        {isSubmitting ? "Submitting..." : "Submit Registration"}
      </button>
    </form>
  );
}
