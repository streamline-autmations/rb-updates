@@ .. @@
 const ContactForm: React.FC = () => {
   const [activeView, setActiveView] = useState<'form' | 'quote' | 'call'>('form');
   const [locationData, setLocationData] = useState<string>('');
   const [leadId, setLeadId] = useState<string>('');
+  
+  // Check URL hash to determine initial view
+  React.useEffect(() => {
+    const hash = window.location.hash;
+    if (hash === '#quote') {
+      setActiveView('quote');
+    } else if (hash === '#call') {
+      setActiveView('call');
+    }
+  }, []);
   
   // Generate or retrieve lead_id and fetch location data on component mount
   useEffe
   }
   )
 }ct(() => {