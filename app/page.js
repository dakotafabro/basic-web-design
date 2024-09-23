import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Web Design Home Page</h1>
        <h2>Citrus College</h2>
        <p>This is my lovely paragraph.</p>

        <div>
          <h3>Reasons I Love To Code:</h3>
          <ol style={{ paddingLeft: "1.25rem" }}>
            <li>Love feeling like a hacker</li>
            <li>People think Im a tech wizard</li>
            <li>Build cool stuff!</li>
          </ol>

          <br></br>
          <br></br>

          <h3>Reasons Why I Love School</h3>
          <ul style={{ paddingLeft: "2rem" }}>
            <li>Learning</li>
            <li>Collaboration</li>
            <li>Build cool stuff in different ways!</li>
          </ul>
        </div>
        <br></br>
        <br></br>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid white",
            borderRadius: "24px",
            padding: "2rem",
          }}
        >
          <h3>Please answer the form:</h3>
          <br></br>
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <label>
                <input type="radio" name="option" value="option1" />I love to
                learn
              </label>
              <label>
                <input type="radio" name="option" value="option2" />I do not
                like to learn that much
              </label>
            </div>
            <br></br>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <label>
                <input type="checkbox" name="check1" />
                Coding is the best
              </label>
              <label>
                <input type="checkbox" name="check2" />
                Coding is not the best
              </label>
            </div>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
