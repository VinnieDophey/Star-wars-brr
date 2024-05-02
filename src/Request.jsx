function Request(something) {
  console.log(something.URL);

  return <button onClick={something.makeRequest}>TOUCH ME!!!</button>;
}

export default Request;
