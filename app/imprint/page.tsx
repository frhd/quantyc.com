import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: 'Impressum',
  description: 'Rechtliche Informationen über die Website.',
}

export default function Page() {
  return (
    <section className={`py-[2rem] md:py-[3rem] max-w-[420px] pl-2 ${GeistSans.className} transition-all duration-300 ease-in-out`}>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <a href="/" className="hover:underline">🟥</a>
      </h1>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Impressum</h1>
      <div className="mb-4">
        <h2 className="font-bold text-xl">Angaben gemäß § 5 TMG</h2>
        <p>
          quantyc GmbH<br />
          Menzelweg 16<br />
          37085 Göttingen<br />
        </p>
        <h2 className="font-bold text-xl mt-4">Kontakt</h2>
        <p>
          Telefon: Tel: +49 (0) 551 29145375<br />
          E-Mail: info@quantyc.com<br />
        </p>
        <h2 className="font-bold text-xl mt-4">Geschätsführung</h2>
        <p>
          Farhad Omid<br />
          Amtsgericht Göttingen HRB 64642
        </p>
        <p>
          USt-IdNr. DE303622038
        </p>
        <h2 className="font-bold text-xl mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          quantyc GmbH
        </p>
        <h2 className="font-bold text-xl mt-4">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2 className="font-bold text-xl mt-4">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt werden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
        
        <h2 className="font-bold text-xl mt-4">Urheberrecht</h2>
        <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </section>
  )
}
