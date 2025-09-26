import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy load with better error handling
const ReactApp = lazy(() =>
  import("reactApp/App").catch(() => ({
    default: () => <div>React app unavailable</div>,
  }))
);

// Vue App Handler - Updated to work in parent
const VueApp = lazy(() =>
  import("vueApp/App")
    .then((module) => ({
      default: () => {
        const VueWrapper = () => {
          const vueRef = React.useRef(null);
          const [mounted, setMounted] = React.useState(false);

          React.useEffect(() => {
            if (module.default && vueRef.current && !mounted) {
              try {
                // Mount Vue app to the container element
                module.default(vueRef.current);
                setMounted(true);
              } catch (error) {
                console.error("Vue mount error:", error);
                vueRef.current.innerHTML = "<div>Vue app failed to load</div>";
              }
            }
          }, [mounted]);

          // Cleanup on unmount
          React.useEffect(() => {
            return () => {
              if (vueRef.current) {
                vueRef.current.innerHTML = "";
              }
            };
          }, []);

          return (
            <div ref={vueRef} style={{ width: "100%", height: "100%" }}></div>
          );
        };
        return <VueWrapper />;
      },
    }))
    .catch(() => ({ default: () => <div>Vue app unavailable</div> }))
);

// Simpler Svelte App Handler
const SvelteApp = lazy(() =>
  import("svelteApp/App")
    .then((module) => ({
      default: () => {
        const SvelteWrapper = () => {
          const svelteRef = React.useRef(null);
          
          React.useEffect(() => {
            if (module.default && svelteRef.current) {
              console.log('Mounting Svelte app');
              module.default(svelteRef.current);
            }
          }, []);

          return <div ref={svelteRef} key="svelte-app"></div>;
        };
        return <SvelteWrapper />;
      },
    }))
    .catch(() => ({ default: () => <div>Svelte app unavailable</div> }))
);

// Simplified Angular handling
const AngularApp = lazy(() =>
  import("angularApp/App")
    .then((module) => ({
      default: () => {
        const AngularWrapper = () => {
          const [loaded, setLoaded] = React.useState(false);

          React.useEffect(() => {
            if (module.default && !loaded) {
              module.default();
              setLoaded(true);
            }
          }, [loaded]);

          return (
            <div>
              <app-root></app-root>
            </div>
          );
        };
        return <AngularWrapper />;
      },
    }))
    .catch(() => ({ default: () => <div>Angular app unavailable</div> }))
);

const App = () => {
  return (
    <Router>
      <header>
        <h1>🚀 Micro Frontend Architecture</h1>
      </header>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/react">⚛️ React</Link>
        <Link to="/angular">🅰️ Angular</Link>
        <Link to="/vue">💚 Vue</Link>
        <Link to="/svelte">🧡 Svelte</Link>
      </nav>
      <div id="app">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/react"
              element={
                <div className="app-container">
                  <ReactApp />
                </div>
              }
            />
            <Route
              path="/angular"
              element={
                <div className="app-container">
                  <AngularApp />
                </div>
              }
            />
            <Route
              path="/vue"
              element={
                <div className="app-container">
                  <VueApp />
                </div>
              }
            />
            <Route
              path="/svelte"
              element={
                <div className="app-container">
                  <SvelteApp />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="app-container">
      <h2>Welcome to Micro Frontend Architecture</h2>
      <p>
        This application demonstrates integration of multiple frontend
        frameworks:
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        <div
          style={{
            padding: "1rem",
            background: "#e3f2fd",
            borderRadius: "8px",
          }}
        >
          <h3>⚛️ React</h3>
          <p>Modern JavaScript library for building user interfaces</p>
        </div>
        <div
          style={{
            padding: "1rem",
            background: "#ffebee",
            borderRadius: "8px",
          }}
        >
          <h3>🅰️ Angular</h3>
          <p>Platform for building mobile and desktop web applications</p>
        </div>
        <div
          style={{
            padding: "1rem",
            background: "#e8f5e8",
            borderRadius: "8px",
          }}
        >
          <h3>💚 Vue.js</h3>
          <p>Progressive framework for building user interfaces</p>
        </div>
        <div
          style={{
            padding: "1rem",
            background: "#fff3e0",
            borderRadius: "8px",
          }}
        >
          <h3>🧡 Svelte</h3>
          <p>Cybernetically enhanced web apps</p>
        </div>
      </div>
      <p>
        Click on the navigation links above to see each framework in action!
      </p>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

