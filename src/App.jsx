
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* NAVBAR */}
      <nav className="bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold">
            Responsive<span className="text-blue-400">Lab</span>
          </h1>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#layout">Layout</a>
            <a href="#images">Images</a>
            <a href="#media">Media</a>
            <a href="#typography">Typography</a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="md:hidden px-5 pb-5 space-y-3">
            <a onClick={() => setMenuOpen(false)} className="block" href="#layout">Layout</a>
            <a onClick={() => setMenuOpen(false)} className="block" href="#images">Images</a>
            <a onClick={() => setMenuOpen(false)} className="block" href="#media">Media</a>
            <a onClick={() => setMenuOpen(false)} className="block" href="#typography">Typography</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="bg-gradient-to-r from-blue-950 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-5 py-14 md:py-24">

          <p className="text-yellow-300 font-bold text-sm">
            REACT + TAILWIND CSS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-4 leading-tight">
            Responsive Design Practical Lab
          </h2>

          <p className="text-blue-100 mt-5 max-w-2xl leading-relaxed">
            Learn how to make websites adapt to mobile phones,
            tablets and desktop computers using Tailwind CSS.
          </p>

          <a href="#layout"
            className="inline-block mt-7 bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg">
            Start Learning
          </a>

        </div>
      </header>

      {/* INTRODUCTION */}
      <section className="max-w-6xl mx-auto px-5 py-12">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is Responsive Design?
        </h2>

        <p className="text-slate-600 mt-3 leading-relaxed max-w-3xl">
          Responsive Design means creating a website that automatically
          adjusts its layout, images and text to fit different screen sizes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-7">

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="text-3xl">📱</div>
            <h3 className="font-bold mt-3">Mobile</h3>
            <p className="text-sm text-slate-500 mt-2">
              Small screen and vertically arranged content.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="text-3xl">📲</div>
            <h3 className="font-bold mt-3">Tablet</h3>
            <p className="text-sm text-slate-500 mt-2">
              Medium screen with more available space.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="text-3xl">💻</div>
            <h3 className="font-bold mt-3">Desktop</h3>
            <p className="text-sm text-slate-500 mt-2">
              Wide screen with multiple columns.
            </p>
          </div>

        </div>
      </section>

      {/* TOPIC 1: RESPONSIVE LAYOUT */}
      <section id="layout" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-5">

          <TopicHeading
            number="01"
            title="Responsive Layout"
            description="Learn how columns change depending on the device screen."
          />

          {/* Screen indicator */}
          <div className="flex gap-3 mt-6">
            <span className="md:hidden bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-bold">
              📱 Mobile view
            </span>

            <span className="hidden md:inline-block bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-bold">
              💻 Tablet / Desktop view
            </span>
          </div>

          {/* Actual responsive layout */}
          <div className="grid lg:grid-cols-3  gap-5 mt-5">

            {["Football", "Basketball", "Volleyball"].map((item, index) => (
              <div key={item} className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-700">
                  0{index + 1}
                </div>
                <h3 className="font-bold text-lg mt-3">{item}</h3>
                <p className="text-slate-600 text-sm mt-2">
                  This card changes its position when the screen width changes.
                </p>
              </div>
            ))}

          </div>

          <CodeExplanation
            code={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`}
            explanation={[
              ["grid", "Turns the container into a CSS Grid layout."],
              ["grid-cols-1", "Displays one column by default, especially on mobile."],
              ["sm:grid-cols-2", "Displays two columns from 640px screen width."],
              ["lg:grid-cols-3", "Displays three columns from 1024px screen width."],
              ["gap-5", "Adds space between the cards."]
            ]}
          />

        </div>
      </section>

      {/* TOPIC 2: RESPONSIVE IMAGES */}
      <section id="images" className="max-w-6xl mx-auto px-5 py-12">

        <TopicHeading
          number="02"
          title="Responsive Images"
          description="Learn how images adjust to the available screen width."
        />

        <div className="flex gap-3 mt-6">
          <span className="md:hidden bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-bold">
            📱 Image fits mobile width
          </span>

          <span className="hidden md:inline-block bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-bold">
            💻 Image uses wider space
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 items-center">

          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
              alt="Computer and web development workspace"
              className="w-full h-52 "
            />
          </div>

          <div>
            <h3 className="text-xl font-bold">
              What happens to this image?
            </h3>

            <p className="text-slate-600 leading-relaxed mt-3">
              On mobile, the image occupies the available width.
              On desktop, it is displayed beside the explanation.
              Its height also changes at different breakpoints.
            </p>

            <div className="bg-blue-950 text-green-300 p-4 rounded-lg mt-5 overflow-x-auto">
              <code className="text-sm">
                w-full h-52 sm:h-64 md:h-80 object-cover
              </code>
            </div>
          </div>

        </div>

        <CodeExplanation
          code="w-full h-52 sm:h-64 md:h-80 object-cover"
          explanation={[
            ["w-full", "Makes the image take 100% of its container width."],
            ["h-52", "Sets image height on mobile to 13rem."],
            ["sm:h-64", "Changes the height to 16rem from 640px."],
            ["md:h-80", "Changes the height to 20rem from 768px."],
            ["object-cover", "Fills the image container while keeping its proportions; some edges may be cropped."]
          ]}
        />

      </section>

      {/* TOPIC 3: RESPONSIVE MEDIA */}
      <section id="media" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-5">

          <TopicHeading
            number="03"
            title="Aspect Ratio and Responsive Media"
            description="Understand how the shape of an image or video changes across devices."
          />

          <div className="flex gap-3 mt-6">
            <span className="md:hidden bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-bold">
              📱 Mobile: 4:3
            </span>

            <span className="hidden md:inline-block bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-bold">
              💻 Desktop: 16:9
            </span>
          </div>

          {/* Same image, different aspect ratio */}
          <div className="max-w-3xl mt-5 aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-slate-200 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
              alt="Web design on a computer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-5 bg-blue-50 p-5 rounded-xl">
            <h3 className="font-bold">Observe the difference</h3>
            <p className="text-slate-600 text-sm mt-2">
              The image uses a 4:3 shape on mobile. From 768px,
              it changes to a wider 16:9 video shape.
            </p>
          </div>

          <CodeExplanation
            code="aspect-[4/3] md:aspect-video"
            explanation={[
              ["aspect-[4/3]", "Sets the image container ratio to 4:3 by default."],
              ["md:aspect-video", "Changes the ratio to 16:9 from 768px screen width."]
            ]}
          />

        </div>
      </section>

      {/* TOPIC 4: RESPONSIVE TYPOGRAPHY */}
      <section id="typography" className="max-w-6xl mx-auto px-5 py-12">

        <TopicHeading
          number="04"
          title="Responsive Typography"
          description="Learn how text size and spacing adapt to different screens."
        />

        <div className="flex gap-3 mt-6">
          <span className="md:hidden bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-bold">
            📱 Smaller text
          </span>

          <span className="hidden md:inline-block bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-bold">
            💻 Larger text
          </span>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-7 mt-5">

          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight">
            Responsive Typography Makes Websites Easier to Read
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mt-5">
            This paragraph changes its font size as the screen gets wider.
            On mobile, the text is smaller to fit the available space.
            On desktop, the text becomes larger and easier to read.
          </p>

          <div className="mt-6 border-l-4 border-blue-600 pl-4">
            <p className="font-bold tracking-wide">
              Tailwind CSS makes responsive text simple.
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Try resizing your browser to observe the change.
            </p>
          </div>

        </div>

        <CodeExplanation
          code="text-sm sm:text-base lg:text-lg leading-relaxed"
          explanation={[
            ["text-sm", "Uses smaller text by default on mobile."],
            ["sm:text-base", "Changes the font size from 640px."],
            ["lg:text-lg", "Uses larger text from 1024px."],
            ["leading-relaxed", "Adds comfortable space between lines."]
          ]}
        />

      </section>

      {/* FINAL SUMMARY */}
      <section className="bg-blue-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-5">

          <h2 className="text-2xl md:text-3xl font-bold">
            What Have You Learned?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">

            {[
              "Responsive Layout",
              "Responsive Images",
              "Aspect Ratio and Media",
              "Responsive Typography"
            ].map((item, index) => (
              <div key={item} className="bg-blue-900 p-5 rounded-xl">
                <span className="text-yellow-300 font-bold">0{index + 1}</span>
                <h3 className="font-bold mt-2">{item}</h3>
              </div>
            ))}

          </div>

          <p className="text-blue-200 text-sm mt-8">
            Responsive Design Practical Lab | React + Tailwind CSS
          </p>

        </div>
      </section>

    </div>
  );
}


/* REUSABLE TOPIC HEADING */
function TopicHeading({ number, title, description }) {
  return (
    <div>
      <p className="text-blue-700 font-bold text-sm">
        TOPIC {number}
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-2">
        {title}
      </h2>

      <p className="text-slate-600 mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
}


/* REUSABLE CODE EXPLANATION */
function CodeExplanation({ code, explanation }) {
  return (
    <div className="mt-7 border border-slate-200 rounded-xl overflow-hidden">

      <div className="bg-slate-950 text-green-300 p-4 overflow-x-auto">
        <p className="text-xs text-slate-400 mb-2">TAILWIND CSS CODE</p>
        <code className="text-sm whitespace-nowrap">{code}</code>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg mb-4">
          What does each class do?
        </h3>

        <div className="space-y-4">
          {explanation.map(([className, meaning]) => (
            <div key={className} className="sm:flex gap-4">
              <code className="inline-block bg-blue-50 text-blue-800 px-2 py-1 rounded text-sm font-bold h-fit">
                {className}
              </code>

              <p className="text-sm text-slate-600 mt-2 sm:mt-0">
                {meaning}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
