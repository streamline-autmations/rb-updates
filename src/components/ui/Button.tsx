@@ .. @@
   const handleClick = () => {
+    // Handle hash navigation for contact forms
+    if (to && to.includes('#')) {
+      const [path, hash] = to.split('#');
+      if (path === '/contact') {
+        // Navigate to contact page and set hash
+        window.location.href = to;
+        return;
+      }
+    }
+    
     if (onClick) {
       onClick();
     }
   };
   
   if (to) {
+    // Handle special contact form links
+    if (to.includes('#')) {
+      return (
+        <motion.div
+          whileHover="hover"
+          whileTap="tap"
+          variants={buttonVariants}
+        >
+          <a href={to} className={buttonClasses}>
+            {children}
+          </a>
+        </motion.div>
+      );
+    }
+    
     return (
       <motion.div
         whileHover="hover"
         whileTap="tap"
         variants={buttonVariants}
       >
-        <Link to={to} className={buttonClasses}>
+        <Link to={to} className={buttonClasses} onClick={handleClick}>
           {children}
         </Link>
       </motion.div>