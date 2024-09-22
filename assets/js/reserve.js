const contactDetails = [
  { label: "Phone", value: "+99888" },
  { label: "Email", value: "info@example.com" },
  { label: "Address", value: "123 Sushi St, Tokyo" },
  { label: "Opening Hours", value: "Mon-Sun 10:00AM - 10:00PM" },
];
const contactSection = contactDetails
  .map(
    (contact) => `
          <div>
            <label for="${contact.label.toLowerCase()}">${contact.label}</label>
            <p style="font-weight: 100">${contact.value}</p>
            <div style="border: 1px solid white; margin-top: 1.8rem"></div>
          </div>
        `
  )
  .join("");

// Insert generated HTML into the contact section
$(".contact-section .contact-form").html(contactSection);
