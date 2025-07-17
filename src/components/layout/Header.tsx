@@ .. @@
           <button
             onClick={handleBookCall}
             data-cal-link={`reckless-bear-demo/appointment-with-recklessbear?metadata[lead_id]=${leadId}`}
             data-cal-namespace="appointment-with-recklessbear"
             data-cal-config='{"layout":"month_view"}'
-            className={`flex-1 px-6 py-4 font-bebas text-lg tracking-wider transition-all duration-300 rounded-md ${
+            className={`flex-1 px-6 py-4 font-bebas text-lg tracking-wider transition-all duration-300 rounded-md cursor-pointer ${
               activeView === 'call'
                 ? 'bg-rb-red text-rb-white'
                 : 'bg-rb-gray-800 text-rb-white hover:bg-rb-red'
             }`}
           >
-            Book a Call
+            <a href="/contact#call" className="block w-full h-full">Book a Call</a>
           </button>