// Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              <section>
                <p className="font-bold text-lg mb-2">En väldigt enkel footer</p>
                <p>Här kan vi lägga till mer detaljerad text</p>
              </section>
              
              <section>
                <p className="text-lg mb-2">Mer text</p>
                <p>Någon intressant länk eller kort info</p>
              </section>
              
              <section>
                <p className="text-lg mb-2">Viktig text</p>
                <p>Hej här står mycket viktigt och bra text</p>
              </section>
              
            </div>
          </div>
        </footer>
      );
    }