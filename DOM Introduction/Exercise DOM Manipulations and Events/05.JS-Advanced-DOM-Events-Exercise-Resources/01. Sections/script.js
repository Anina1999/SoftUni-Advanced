function create(words) {
   const contentRef = document.getElementById("content");

   for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = word;
      p.style.display = 'none';

      div.appendChild(p);
      contentRef.appendChild(div);

      div.addEventListener('click', onClick);

      function onClick(e) {
         const div = e.currentTarget;
         const p = div.children[0];

         const currentState = p.style.display;
         p.style.display = currentState === 'none' ? 'block' : "none";
      }
   }
}