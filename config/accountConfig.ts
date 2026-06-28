export const accountConfig = {
  sections: [
    {
      title: "Personal Information",
      items: [
        {
          id: "full-name",
          type: "link",
          icon: "person",
          label: "Full Name",
          valueKey: "profile.name",
          route: "/edit-name",
        },
        {
          id: "email",
          type: "link",
          icon: "mail",
          label: "Email Address",
          valueKey: "profile.email",
          route: "/edit-email",
          last: true,
        },
      ],
    },
    {
      title: "Payment Methods",
      items: [
        {
          id: "visa",
          type: "visa",
          label: "Card",
          valueKeys: {
            mask: "cards.primary.mask",
            expiry: "cards.primary.expiry",
          },
          badge: "Primary",
        },
        { id: "add-card", type: "add-card", last: true },
      ],
    },
    {
      title: "Security",
      items: [
        {
          id: "biometric",
          type: "toggle",
          icon: "fingerprint",
          label: "Biometric Unlock",
          stateKey: "biometricEnabled",
        },
        {
          id: "change-pin",
          type: "link",
          icon: "vpn-key",
          label: "Change Security Pin",
          last: true,
        },
      ],
    },
    {
      title: "App Settings",
      items: [
        {
          id: "dark-mode",
          type: "badge",
          icon: "dark-mode",
          label: "Dark Mode",
          badge: "Always On",
        },
        {
          id: "notifications",
          type: "toggle",
          icon: "notifications",
          label: "Notifications",
          stateKey: "notificationsEnabled",
          last: true,
        },
      ],
    },
    {
      title: "Help & Support",
      items: [
        {
          id: "contact-support",
          type: "link",
          icon: "contact_support",
          label: "Contact Support",
          subtitle: "Chat with our team 24/7",
          route: "/support",
        },
        {
          id: "faqs",
          type: "link",
          icon: "forum",
          label: "FAQs",
          subtitle: "Find answers to common questions",
          route: "/support",
          last: true,
        },
      ],
    },
    {
      title: "Support & Legal",
      items: [
        {
          id: "help-center",
          type: "static",
          icon: "help-center",
          label: "Help Center",
        },
        {
          id: "terms",
          type: "link",
          icon: "description",
          label: "Terms of Service",
          last: true,
        },
      ],
    },
  ],
} as const;

export default accountConfig;
