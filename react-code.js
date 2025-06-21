function CounterValue() {
  const [count, setCount] = React.useState(window.counterState.count);

  React.useEffect(() => {
    // Listen for vanilla JS updates
    const updateListener = () => {
      setCount(window.counterState.count);
    };

    window.counterState.listeners.push(updateListener);

    // Cleanup on unmount
    return () => {
      const index = window.counterState.listeners.indexOf(updateListener);
      if (index > -1) {
        window.counterState.listeners.splice(index, 1);
      }
    };
  }, []);

  const handleReset = () => {
    window.updateCounter(0);
  };

  return (
    <div>
      <div className="counter-value">{count}</div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

// Mount React component
const reactContainer = document.getElementById("counter-display");
const root = ReactDOM.createRoot(reactContainer);
root.render(<CounterValue />);
