import { contactPage } from "@/lib/site-config";

export function ContactForm() {
  const fields = contactPage.formFields;

  return (
    <form className="card p-8 shadow-lg shadow-slate-200/50 sm:p-10">
      <h3 className="text-lg font-bold text-heading">Formulaire de contact</h3>
      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-600">
            {fields.name} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-surface/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-600">
            {fields.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-surface/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-600">
            {fields.email} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-surface/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-600">
            {fields.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-surface/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-600">
            {fields.subject} <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-surface/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium text-slate-600">
            {fields.file}
          </label>
          <input
            id="file"
            name="file"
            type="file"
            className="mt-1.5 w-full rounded-xl border border-dashed border-slate-300 bg-surface/50 px-4 py-3 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-600">
            {fields.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-surface/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          {fields.submit}
        </button>
      </div>
    </form>
  );
}
