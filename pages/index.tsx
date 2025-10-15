import { motion } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff" }}>
          நான் அதிக அக்கறை கொண்ட,<br />
          ஒருே பெண் நீ மட்டும் தான்!
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <Typography variant="h4" sx={{ mt: 4, color: "#fff" }}>
          பார்ப்பதற்கு மட்டும் அழகாய் இருக்கும் பெண்களுக்கு<br />
          மத்தியில், நினைப்பதற்க்கே அழகானவள் அவள்!
        </Typography>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Typography variant="h1" sx={{ mt: 6, color: "#ff69b4" }}>
          N 💗
        </Typography>
      </motion.div>
    </Container>
  );
}
