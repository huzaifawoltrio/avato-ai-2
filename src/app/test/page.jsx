import React from "react";

export const metadata = {
  title: "Zubuz Tailwind CSS Test Page",
};

export default function ZubuzTestPage() {
  return (
    <div className="min-h-screen bg-light-custom py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-heading mb-4 text-4xl md:text-5xl font-bold">
            Zubuz CSS Components Test
          </h1>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Testing custom colors, zubuz buttons, and utility classes
          </p>
        </header>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Primary", color: "bg-primary", textColor: "text-white" },
              {
                name: "Secondary",
                color: "bg-secondary",
                textColor: "text-white",
              },
              { name: "Accent", color: "bg-accent", textColor: "text-white" },
              {
                name: "Light BG",
                color: "bg-light-custom",
                textColor: "text-gray",
              },
              { name: "Dark BG", color: "bg-dark-bg", textColor: "text-light" },
              { name: "Gray", color: "bg-gray-500", textColor: "text-light" },
              { name: "Light", color: "bg-gray-200", textColor: "text-gray" },
              { name: "Body", color: "bg-white", textColor: "text-body" },
            ].map((item) => (
              <div
                key={item.name}
                className={`${item.color} rounded-lg p-6 text-center shadow border-2 border-primary`}
              >
                <span className={`${item.textColor} font-medium`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Typography with Custom Colors
          </h2>
          <div className="space-y-4 bg-white p-8 rounded-xl shadow-sm">
            <h1 className="text-heading text-4xl font-bold">
              Heading 1 (Custom Heading Color)
            </h1>
            <h2 className="text-heading text-3xl font-bold">
              Heading 2 (Custom Heading Color)
            </h2>
            <p className="text-body text-lg">
              Body text using custom body color from CSS variables
            </p>
            <p className="text-gray text-lg">
              Gray text using custom gray color
            </p>
            <p className="text-primary text-lg font-semibold">
              Primary colored text
            </p>
            <p className="text-secondary text-lg font-semibold">
              Secondary colored text
            </p>
            <p className="text-accent text-lg font-semibold">
              Accent colored text
            </p>
            <p className="text-light bg-dark-bg p-4 rounded">
              Light text on dark background
            </p>
          </div>
        </section>

        {/* Zubuz Buttons Section */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Zubuz Style Buttons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary">
              <h3 className="text-heading mb-4 text-xl font-bold">
                Default Zubuz Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <button className="zubuz-default-btn">Default Button</button>
                <button className="zubuz-default-btn pill">Pill Button</button>
                <button className="zubuz-default-btn disabled">
                  Disabled Button
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary">
              <h3 className="text-heading mb-4 text-xl font-bold">
                ID-Based Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <button id="comment-btn">Comment Button</button>
                <button id="zubuz-submit-btn">Submit Button</button>
                <button id="zubuz-account-btn">Account Button</button>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Buttons */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Full Width Buttons
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary">
            <div className="space-y-4">
              <button className="zubuz-default-btn d-block">
                Full Width Default
              </button>
              <button className="zubuz-default-btn d-block pill">
                Full Width Pill
              </button>
              <button id="comment-btn" className="d-block">
                Full Width Comment
              </button>
              <button id="zubuz-submit-btn" className="d-block pill">
                Full Width Submit Pill
              </button>
            </div>
          </div>
        </section>

        {/* Cards with Custom Colors */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Card Components with Custom Styling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary p-6 rounded-xl shadow-lg">
              <h3 className="text-light mb-2 text-xl font-bold">
                Primary Card
              </h3>
              <p className="text-light mb-4">
                This card uses the primary background color from CSS variables.
              </p>
              <button className="zubuz-default-btn">Action</button>
            </div>

            <div className="bg-secondary p-6 rounded-xl shadow-lg">
              <h3 className="text-dark-bg mb-2 text-xl font-bold">
                Secondary Card
              </h3>
              <p className="text-dark-bg mb-4">
                This card uses the secondary background color.
              </p>
              <button id="comment-btn">Comment</button>
            </div>

            <div className="bg-accent p-6 rounded-xl shadow-lg border-2 border-primary">
              <h3 className="text-light mb-2 text-xl font-bold">Accent Card</h3>
              <p className="text-light mb-4">
                Accent background with primary border.
              </p>
              <button id="zubuz-account-btn" className="pill">
                Account
              </button>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Interactive Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-light-custom p-6 rounded-xl shadow-sm border border-secondary">
              <h3 className="text-heading mb-4 text-xl font-bold">
                Hover Effects Demo
              </h3>
              <p className="text-body mb-4">
                Hover over these buttons to see the custom animations in action.
              </p>
              <div className="space-y-3">
                <button className="zubuz-default-btn d-block">
                  Hover for Animation
                </button>
                <button id="zubuz-submit-btn" className="d-block">
                  Submit with Animation
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-primary">
              <h3 className="text-heading mb-4 text-xl font-bold">
                Button Variants
              </h3>
              <p className="text-body mb-4">
                Different button styles and states.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button className="zubuz-default-btn">Normal</button>
                <button className="zubuz-default-btn pill">Pill</button>
                <button id="comment-btn">Comment ID</button>
                <button id="zubuz-account-btn" className="pill">
                  Account Pill
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section with Custom Styling */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Form with Custom Colors
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border-2 border-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-body font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:ring-2 focus:ring-secondary focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:ring-2 focus:ring-secondary focus:border-accent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-body font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:ring-2 focus:ring-secondary focus:border-accent"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div className="flex items-center mb-6">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-primary bg-gray-100 border-2 border-secondary rounded focus:ring-accent"
              />
              <label htmlFor="terms" className="ml-2 text-body">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="space-y-3">
              <button id="zubuz-submit-btn" className="d-block">
                Submit Form
              </button>
              <button className="zubuz-default-btn d-block pill">
                Alternative Submit
              </button>
            </div>
          </div>
        </section>

        {/* Background Variants */}
        <section className="mb-16">
          <h2 className="text-heading mb-6 text-2xl font-bold">
            Background Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-bg p-8 rounded-xl shadow-lg">
              <h3 className="text-light mb-4 text-xl font-bold">
                Dark Background
              </h3>
              <p className="text-light mb-6">
                This section uses the custom dark background with light text.
              </p>
              <button className="zubuz-default-btn">Light Button</button>
            </div>

            <div className="bg-light-custom p-8 rounded-xl shadow-lg border-2 border-accent">
              <h3 className="text-heading mb-4 text-xl font-bold">
                Light Custom Background
              </h3>
              <p className="text-body mb-6">
                Custom light background from CSS variables with accent border.
              </p>
              <button id="comment-btn" className="pill">
                Styled Comment
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center bg-primary p-8 rounded-xl">
          <h3 className="text-light mb-4 text-xl font-bold">Test Complete</h3>
          <p className="text-light mb-6">
            All custom CSS classes and zubuz button styles have been
            demonstrated.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="zubuz-default-btn">Final Button</button>
            <button id="zubuz-account-btn" className="pill">
              Account Pill
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
