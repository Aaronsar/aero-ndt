import { contactPage } from "@/lib/site-config";

export function ContactForm() {
  const fields = contactPage.formFields;

  return (
    <form className="card p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm text-slate-600">
            {fields.name} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-slate-600">
            {fields.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-slate-600">
            {fields.email} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2]"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm text-slate-600">
            {fields.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1.5 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2]"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm text-slate-600">
            {fields.subject} <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="mt-1.5 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2]"
          />
        </div>

        <div>
          <label htmlFor="file" className="block text-sm text-slate-600">
            {fields.file}
          </label>
          <input
            id="file"
            name="file"
            type="file"
            className="mt-1.5 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-[#f0f5fa] file:px-4 file:py-2 file:text-sm file:text-[#1e293b]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-slate-600">
            {fields.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1.5 w-full resize-none rounded border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2]"
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          {fields.submit}
        </button>
      </div>
    </form>
  );
}
