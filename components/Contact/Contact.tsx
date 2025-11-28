import { ContactDetails } from "./components/ContactDetails/ContactDetails";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Headings } from "./components/Headings/Headings";

export const Contact = () => {
  return (
    <div className="app_width my-20 lg:my-16">
      <Headings />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="col-span-1">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};
