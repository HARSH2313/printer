// pages/troubleshooting.js

import Head from "next/head";
import styles from "../../styles/Troubleshooting.module.css";

export default function Troubleshooting() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Printer Troubleshooting - Support</title>
        <meta
          name="description"
          content="Find solutions for common printer issues including paper jams, poor print quality, and connectivity problems."
        />
      </Head>

      <main className={styles.main}>
        <h1>Troubleshooting</h1>
        <p>
          If you're experiencing issues with your printer, we’re here to help.
          Below are some common problems and their solutions. If you need
          further assistance, feel free to contact our support team.
        </p>

        <section>
          <h2>1. Printer Not Responding</h2>
          <p>
            <strong>Issue:</strong> Your printer isn’t turning on or responding
            to print commands.
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Check Power Supply:</strong> Ensure the printer is
              properly plugged in and the power cord is securely connected.
            </li>
            <li>
              <strong>Restart Printer:</strong> Turn off the printer, wait a few
              seconds, and turn it back on.
            </li>
            <li>
              <strong>Check for Error Messages:</strong> Refer to the printer’s
              manual for any error messages or warning lights.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Paper Jams</h2>
          <p>
            <strong>Issue:</strong> Paper is stuck in the printer.
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Open Printer Tray:</strong> Remove any jammed paper
              gently.
            </li>
            <li>
              <strong>Check Paper Path:</strong> Look for any remaining paper
              fragments.
            </li>
            <li>
              <strong>Use Proper Paper:</strong> Ensure you’re using the correct
              paper type and size.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Poor Print Quality</h2>
          <p>
            <strong>Issue:</strong> Printouts are faded, streaked, or have
            incorrect colors.
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Check Ink or Toner Levels:</strong> Replace cartridges if
              they’re empty or low.
            </li>
            <li>
              <strong>Clean Print Heads:</strong> Use the printer’s cleaning
              function.
            </li>
            <li>
              <strong>Adjust Print Settings:</strong> Verify print quality
              settings in the printer driver.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Printer Offline</h2>
          <p>
            <strong>Issue:</strong> The printer appears as "Offline" or "Not
            Connected."
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Check Connections:</strong> Verify wired or wireless
              connections.
            </li>
            <li>
              <strong>Set as Default Printer:</strong> Make sure the printer is
              set as the default printer.
            </li>
            <li>
              <strong>Restart Devices:</strong> Restart your computer, printer,
              and router.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Error Codes</h2>
          <p>
            <strong>Issue:</strong> Printer displays an error code or message.
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Refer to Manual:</strong> Consult your printer’s user
              manual for error code details.
            </li>
            <li>
              <strong>Update Drivers:</strong> Download and install the latest
              drivers from the manufacturer’s website.
            </li>
            <li>
              <strong>Contact Support:</strong> Reach out with the specific
              error code if needed.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Printer Not Recognized</h2>
          <p>
            <strong>Issue:</strong> Printer is not being recognized by your
            computer.
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Check USB Connection:</strong> Ensure the USB cable is
              securely connected.
            </li>
            <li>
              <strong>Install Drivers:</strong> Verify you have the correct
              drivers installed.
            </li>
            <li>
              <strong>Update Operating System:</strong> Ensure your OS is
              up-to-date.
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Network Issues</h2>
          <p>
            <strong>Issue:</strong> Problems with networked printers or wireless
            connectivity.
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Check Network Settings:</strong> Ensure the printer is
              connected to the correct network.
            </li>
            <li>
              <strong>Restart Network Devices:</strong> Refresh network
              connections by restarting your router.
            </li>
            <li>
              <strong>Run Network Troubleshooter:</strong> Use your computer’s
              network troubleshooter.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Scanning Issues</h2>
          <p>
            <strong>Issue:</strong> Problems with scanning documents or images.
          </p>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <strong>Check Scanner Connection:</strong> Ensure the scanner is
              connected and powered on.
            </li>
            <li>
              <strong>Update Scanner Software:</strong> Install the latest
              scanner software.
            </li>
            <li>
              <strong>Clean Scanner Glass:</strong> Remove dust or smudges from
              the scanner glass.
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          If you need more help, please contact our support team. We're here to
          assist you with expert advice and solutions.
        </p>
        <a href="mailto:support@example.com" className={styles.contactLink}>
          Contact Support
        </a>
      </footer>
    </div>
  );
}
