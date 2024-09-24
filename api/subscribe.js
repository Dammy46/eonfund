import request from "request";

export default (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const mailjetApiKey = "6d90c12c6b1775632442321fc5e29029";
  const mailjetSecretKey = "a0d59f43aeaaeac6e7683403a9955183";
  const listId = "331297";

  const options = {
    url: `https://api.mailjet.com/v3/REST/contactslist/${listId}/managecontact`,
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${mailjetApiKey}:${mailjetSecretKey}`).toString("base64"),
      "Content-Type": "application/json",
    },
    json: {
      Email: email,
      Action: "addnoforce", // Add contact without forcing the subscription
    },
  };

  request(options, (error, response, body) => {
    if (error) {
      return res.status(500).json(error);
    }
    res.status(response.statusCode).json(body);
  });
};
