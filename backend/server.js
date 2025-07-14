import express from "express";
import { exec } from "child_process";
const app = express();

app.get("/run-python", (req, res) => {
  exec("python3 script.py", (error, stdout, stderr) => {
    if (error) return res.status(500).send(`Error: ${error.message}`);
    if (stderr) return res.status(500).send(`Stderr: ${stderr}`);
    res.send(`Python Output: ${stdout}`);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
