for (let i = 0; i < 200; i++) {
  fetch("http://localhost:1337/api/posts/" + (i + 9), {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer 19213ad6e94422b25d1af3b77bfdb7942273b8fd4adef4b6cb8c6371ba845b2334b96bd8aa2b8ef7f8df965d1e428034a1dcff81a760005516818895261c0a9377167cb9f50ba8a5db9a1a2f5e70b1529fe5fa5544781a275fc6a09ca248df36c9684dd76cb2a910138d7583606ad27abf12f703736bee69c5bcb5e6a0049397`,
    },
  })
    .then((res) => {
      console.log("OK: ", JSON.stringify(res, null, 2));
    })
    .catch(() => {
      console.log("NG: ", i);
    });
}
