for(let i=0;i<200;i++) {
  fetch("http://localhost:1337/api/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer 038fff2347839997810c4afbeeab5a85cdc5c6cfa4930668d14e64d46db527b1f5d94b1ed4fd90e75ee7ea9484d6bbc9fb1e81b200acf1aed490ce53b857e9a98b188a181dc3252c4cf4f37bb53d421ed31de0527937c3a9e8079c6df6b991cd129336f4bab634184d1738d17d8f632fc40b374ee6b1c3da9bc9d720077e237a`
    },
    body: JSON.stringify({
      "data": {
        categories: {
          connect: []
        },
        "title": "test" + i,
        slug: "test" + i,
        content: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "tests" + i,
              },
            ],
          }
        ]
      }
    }),
  }).then((res) => {
    console.log("OK: ", JSON.stringify(res, null, 2));
  }).catch(() => {
    console.log("NG: ", i);
  })
}