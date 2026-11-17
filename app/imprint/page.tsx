import { Mark } from '../components/mark'

export const metadata = {
  title: 'Impressum',
  description: 'Rechtliche Informationen über die Website.',
}

export default function Page() {
  return (
    <section className="max-w-[400px]">
      <Mark />
      <h2 className="font-semibold text-xl mb-8 tracking-tighter">Impressum</h2>
      <p className="mb-8 italic text-neutral-500 dark:text-neutral-400">/* This website does not use cookies.
        <br /> Diese Website verwendet keine Cookies. */</p>
      <div>
        <h3 className="mb-1 font-bold">Angaben gemäß § 5 DDG</h3>
        <p className="mb-4">
          quantyc GmbH<br />
          Menzelweg 16<br />
          37085 Göttingen
        </p>
        <h3 className="mt-8 mb-1 font-bold">Kontakt</h3>
        <p className="mb-4">
          Telefon: +49 (0) 551 29145375<br />
          E-Mail: info@quantyc.com
        </p>
        <h3 className="mt-8 mb-1 font-bold">Geschäftsführung</h3>
        <p className="mb-4">
          Farhad Omid<br />
          Amtsgericht Göttingen HRB 64642
        </p>
        <p className="mb-4">
          USt-IdNr. DE303622038
        </p>
        <h3 className="mt-8 mb-1 font-bold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
        <p className="mb-4">
          Farhad Omid<br />
          Anschrift wie oben
        </p>
        <h3 className="mt-8 mb-1 font-bold">Haftung für Inhalte</h3>
        <p className="mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mb-4">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
        <h3 className="mt-8 mb-1 font-bold">Haftung für Links</h3>
        <p className="mb-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
        <h3 className="mt-8 mb-1 font-bold">Urheberrecht</h3>
        <p className="mb-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </section>
  )
}
