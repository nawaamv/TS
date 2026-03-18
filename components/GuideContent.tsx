import Image from 'next/image';
import { MapPin, Calendar, Clock, Info, AlertTriangle, CheckCircle2, Ship, Banknote, ShieldPlus, Map } from 'lucide-react';

export function GuideContent() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1920"
            alt="Maldives Aerial View"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 backdrop-blur-md text-white text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              6–7 May 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Participant Guide
            </h1>
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            ISSA Technical Seminar on Strengthening Financial Sustainability and Institutional Capacity.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
              <MapPin className="w-4 h-4 text-teal-600" />
              Crossroads Maldives
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
              <Info className="w-4 h-4 text-teal-600" />
              Hosted by Maldives Pension Office
            </div>
          </div>
        </div>
      </section>

      {/* 1. Welcome Note */}
      <section id="welcome" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Welcome Note</h2>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6 leading-relaxed">
          <p className="lead text-xl text-slate-700 font-medium mb-6">Welcome to the Maldives!</p>
          <p>
            It is our great pleasure to welcome you to the ISSA Technical Seminar on Strengthening Financial Sustainability and Institutional Capacity, organised by the International Social Security Association (ISSA) and hosted by the Maldives Pension Office.
          </p>
          <p>
            This Participant Guide has been prepared to help you enjoy a smooth, comfortable, and enriching visit. Alongside practical logistics and seminar information, it also includes helpful tips on getting around the capital city Malé, Hulhumalé, and Maafushi, navigating the airport, local customs, transportation, and suggestions for things to see and experience during your stay.
          </p>
          <p>
            Whether this is your first visit to the Maldives or a return to our islands, we hope your time here is both productive and memorable. Should you require any assistance before or during the seminar, please do not hesitate to reach out to the contact persons listed at the end of this guide.
          </p>
          <p>
            We look forward to welcoming you in May 2026 and to a meaningful and engaging Technical Seminar.
          </p>
          <p className="font-medium text-slate-900 mt-8">
            Warm regards,<br />
            Maldives Pension Office
          </p>
        </div>
      </section>

      {/* 2. Quick Facts */}
      <section id="quick-facts" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Quick Facts About the Seminar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              Schedule & Location
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li><strong className="text-slate-900">Dates:</strong> 6–7 May 2026 (Wednesday & Thursday)</li>
              <li><strong className="text-slate-900">Daily Schedule:</strong> 09:00–16:00 each day, including coffee breaks and lunch.</li>
              <li><strong className="text-slate-900">Venue:</strong> Crossroads Maldives, South Malé Atoll (Accessible by speedboat)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Ship className="w-5 h-5 text-teal-600" />
              Logistics
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li><strong className="text-slate-900">Daily Sea Transfers:</strong> From Malé / Hulhumalé / Maafushi to Crossroads arranged by the Pension Office every morning and evening.</li>
              <li><strong className="text-slate-900">Welcome Dinner:</strong> 6 May 2026, 18:30–21:00 at Crossroads Maldives.</li>
              <li><strong className="text-slate-900">Visas & Entry:</strong> On-Arrival Meeting Visa. IMUGA Traveller Declaration required within 96 hours before arrival.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. The Venue */}
      <section id="venue" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">3. The Venue: Crossroads Maldives</h2>
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image 
            src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1200"
            alt="Crossroads Maldives Integrated Destination"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            Crossroads Maldives is the first multi-island integrated leisure destination in the Maldives, combining modern facilities with the relaxed charm of island life. The destination is located in the South Malé Atoll, just 15 minutes from Velana International Airport by speedboat.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-2xl my-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">What you&apos;ll find at Crossroads</h3>
            <ul className="grid sm:grid-cols-2 gap-2 mt-0 mb-0 list-none pl-0">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" /> Two resorts: SAii Lagoon Maldives and Hard Rock Hotel Maldives</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" /> The Marina @ Crossroads (cafés, restaurants, shops)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" /> Walkable waterfront promenades</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" /> Free Wi-Fi in public areas of the Marina</li>
            </ul>
          </div>

          <h3>Weather & Environment in Early May</h3>
          <p>
            Early May marks the beginning of the Southwest Monsoon season. While generally warm and beautiful, short rain showers and occasional wind are possible.
          </p>
          <ul>
            <li><strong>Temperature:</strong> 28–32°C (warm and humid)</li>
            <li><strong>Humidity:</strong> High</li>
            <li><strong>Rain:</strong> Short tropical showers, often passing quickly</li>
            <li><strong>Sunlight:</strong> Strong UV levels</li>
          </ul>
        </div>
      </section>

      {/* 4. Accommodation */}
      <section id="accommodation" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">4. Your Stay: Accommodation Options</h2>
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image 
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200"
            alt="Maldives Accommodation"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Staying at Crossroads Maldives</h3>
            <p className="text-slate-600 mb-4">For maximum comfort and convenience, participants may choose to stay directly at the seminar venue, such as <strong>SAii Lagoon Maldives</strong>.</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> No daily sea transfers required</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Short walking distance to all seminar activities</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Flexible schedule</li>
            </ul>
            <div className="bg-teal-50 text-teal-800 p-4 rounded-xl text-sm">
              <strong>Special Rates:</strong> Pension Office will negotiate special room rates for ISSA participants. Book early through the Hotel Recommendations document to secure these rates.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Malé City</h4>
              <p className="text-sm text-slate-600">The capital city. Best for those who prefer urban conveniences, local culture, and business-style hotels. Walking distance to cafés and shops.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Hulhumalé</h4>
              <p className="text-sm text-slate-600">A modern, planned urban island near the airport. Offers a quieter beachfront ambience and modern mid-range hotels.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Maafushi</h4>
              <p className="text-sm text-slate-600">A popular local island in South Malé Atoll. Budget-friendly guesthouses and a more local island experience. Transfers provided.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900">
              <strong>Important:</strong> If you stay on islands other than Malé, Hulhumalé, Maafushi, or Crossroads, you must arrange and pay for your own transportation. Private speedboats can be costly (USD 200–600+).
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transportation */}
      <section id="transportation" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Transportation to the Venue</h2>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            During the seminar, Pension Office will provide complimentary round-trip speedboat transfers for registered participants staying in Malé City, Hulhumalé, and Maafushi.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-600" />
                Daily Transfer Times
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Morning</span>
                  <span className="font-medium text-slate-900">08:00–08:30 (TBC)</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Evening</span>
                  <span className="font-medium text-slate-900">After 16:00 (TBC)</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Please arrive at least 15 minutes before departure. Boats cannot be delayed.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-600" />
                Departure Points
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <strong className="text-slate-900 block">Malé City:</strong>
                  Henveiru Ferry Terminal (in front of Maagiri Hotel)
                </li>
                <li>
                  <strong className="text-slate-900 block">Maafushi:</strong>
                  Maafushi Jetty
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Arrival */}
      <section id="arrival" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Arrival in Maldives</h2>
        <div className="relative w-full h-[250px] rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image 
            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=1200"
            alt="Arrival in Maldives"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            Participants will arrive through Velana International Airport (VIA), located on Hulhulé Island, directly connected to Malé and Hulhumalé by bridge/highway.
          </p>

          <h3>Immigration Requirements</h3>
          <ul>
            <li>Passport with Machine Readable Zone (MRZ) and minimum 1 month validity.</li>
            <li>Complete travel itinerary (return tickets, hotel reservations).</li>
            <li>Completed <strong>IMUGA Traveller Declaration</strong> (within 96 hours before arrival). Submit at <a href="https://imuga.immigration.gov.mv/" target="_blank" rel="noreferrer" className="text-teal-600 hover:text-teal-700">imuga.immigration.gov.mv</a>.</li>
          </ul>

          <div className="bg-red-50 border border-red-100 p-6 rounded-2xl my-8">
            <h4 className="text-red-900 font-bold mt-0 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Customs Restrictions
            </h4>
            <p className="text-red-800 text-sm mb-0">
              The Maldives prohibits bringing in alcohol, narcotics, pork or pork products, and hazardous chemicals. Alcohol will be confiscated at customs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Connectivity</h4>
              <p className="text-sm text-slate-600 mb-4">SIM cards (Dhiraagu, Ooredoo) are available in the arrival hall. Typical tourist packages are USD 40–50 for 15–30 GB.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Airport Taxis</h4>
              <p className="text-sm text-slate-600 mb-4">Available 24/7 outside the terminal. 15 mins to Malé, 10-15 mins to Hulhumalé. Use the <strong>AvasRide</strong> app once you have data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Getting Around */}
      <section id="getting-around" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Getting Around</h2>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            Malé City, Hulhumalé, and Maafushi are relatively small and easy to navigate.
          </p>
          
          <div className="space-y-6 not-prose mt-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-slate-100 p-4 rounded-xl shrink-0">
                <Map className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Taxis & AvasRide</h4>
                <p className="text-slate-600">Taxis are widely available. The most convenient option is the <strong>AvasRide</strong> mobile application (similar to Uber/Grab). Payment can be made in cash or via card in the app. Book early during peak hours.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-slate-100 p-4 rounded-xl shrink-0">
                <MapPin className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Walking in Malé & Hulhumalé</h4>
                <p className="text-slate-600">Malé is compact but busy with narrow streets and motorbike traffic. Use zebra crossings. Hulhumalé is more spacious, pedestrian-friendly, and has a nice beachfront promenade.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-slate-100 p-4 rounded-xl shrink-0">
                <Ship className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Maafushi</h4>
                <p className="text-slate-600">A small, highly walkable island. Most places are within a 5–10 minute walk. Taxis are generally not required, though some hotels have small electric buggies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Etiquette */}
      <section id="etiquette" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">8. Etiquette in the Maldives</h2>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            The Maldives is a warm, welcoming, and culturally rich Islamic nation. While resort islands are highly international, local inhabited islands follow modest cultural norms.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Dress Code</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong>Local Islands (Malé, Hulhumalé, Maafushi):</strong> Clothing should be modest. Swimwear is not permitted in public areas (except designated tourist beaches).</li>
                <li><strong>Resorts (Crossroads):</strong> Casual resort wear. Swimwear permitted in pool/beach areas. Smart casual for seminar sessions.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Alcohol & Beaches</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong>Alcohol:</strong> Not available on local islands. Available at Crossroads and resorts.</li>
                <li><strong>Local Beaches:</strong> Modest swimwear required (covering shoulders/knees).</li>
                <li><strong>Bikini Beach (Maafushi) & Resorts:</strong> Regular swimwear allowed.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Currency & Payments */}
      <section id="currency" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">9. Currency & Payments</h2>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-lg text-slate-600 mb-6">
            The national currency is the <strong>Maldivian Rufiyaa (MVR)</strong>, though the <strong>US Dollar (USD)</strong> is widely accepted.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-teal-600" /> Cards
              </h4>
              <p className="text-slate-600 text-sm">Most hotels, restaurants, and retail outlets accept Visa and Mastercard. Some accept Amex.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-teal-600" /> Cash & ATMs
              </h4>
              <p className="text-slate-600 text-sm">Cash is useful for taxis and small local purchases. ATMs are available at the airport and across Malé, Hulhumalé, and Maafushi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Health & Safety */}
      <section id="health-safety" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">10. Health, Safety & Emergencies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShieldPlus className="w-6 h-6 text-teal-400" />
              Emergency Numbers
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Police</span>
                <span className="text-2xl font-mono font-bold text-white">119</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Fire & Rescue</span>
                <span className="text-2xl font-mono font-bold text-white">118</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Ambulance</span>
                <span className="text-2xl font-mono font-bold text-white">100</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Coast Guard</span>
                <span className="text-2xl font-mono font-bold text-white">191</span>
              </li>
            </ul>
          </div>
          <div className="prose prose-slate text-slate-600">
            <h3 className="text-xl font-bold text-slate-900 mt-0">Medical Facilities</h3>
            <p>Malé and Hulhumalé have well-equipped hospitals capable of addressing most medical needs:</p>
            <ul>
              <li>Indira Gandhi Memorial Hospital (IGMH) – Malé</li>
              <li>ADK Hospital – Malé</li>
              <li>Tree Top Hospital – Hulhumalé</li>
            </ul>
            <p className="text-sm mt-6">
              Crossroads Maldives maintains on-site first aid support. For serious cases, transport to hospitals will be arranged immediately.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Experience Malé */}
      <section id="experience" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">11. Experience Malé</h2>
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image 
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1200"
            alt="Malé City Skyline"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            If you are staying in Malé City, you&apos;ll find a compact but vibrant capital full of character.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">Must-See Places</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong>Old Friday Mosque:</strong> Malé&apos;s oldest mosque.</li>
                <li><strong>Islamic Centre:</strong> Striking golden dome.</li>
                <li><strong>National Museum:</strong> Located in Sultan Park.</li>
                <li><strong>Local Market & Fish Market:</strong> Lively local trade.</li>
                <li><strong>Rasfannu & Artificial Beach:</strong> Public beachfronts.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">Local Food to Try</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong>Mas-huni:</strong> Tuna and grated coconut with roshi.</li>
                <li><strong>Garudhiya:</strong> Clear tuna broth with rice.</li>
                <li><strong>Rihaakuru:</strong> Rich fish paste.</li>
                <li><strong>Hedhikaa (short eats):</strong> bajiya, gulha, keemia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Contacts */}
      <section id="contacts" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">12. Useful Contacts</h2>
        <div className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-teal-50 mb-6">Host Organization (Pension Office)</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-white">Azhath Rushdy</p>
                  <p className="text-teal-200 text-sm mb-1">Key Contact Person</p>
                  <p className="text-teal-100 font-mono">+960 7791901</p>
                  <p className="text-teal-100 text-sm">azhath.rushdy@pension.gov.mv</p>
                </div>
                <div>
                  <p className="font-bold text-white">Fathimath Nisha Fahmy</p>
                  <p className="text-teal-100 font-mono">+960 7906150</p>
                  <p className="text-teal-100 text-sm">fathimath.nisha@pension.gov.mv</p>
                </div>
                <div>
                  <p className="font-bold text-white">Lamath Adnan</p>
                  <p className="text-teal-100 font-mono">+960 9493583</p>
                  <p className="text-teal-100 text-sm">lamath.adnan@pension.gov.mv</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-50 mb-6">ISSA Contacts</h3>
              <div className="bg-teal-800/50 p-6 rounded-2xl">
                <p className="text-teal-100 text-sm mb-4">
                  For questions regarding registration, programme details, or ISSA coordination:
                </p>
                <p className="font-bold text-white">Indrajid Nurmukti</p>
                <p className="text-teal-100 text-sm">nurmukti@ilo.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
