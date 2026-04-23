const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/auth");
const UserData = require("../models/UserData");

// ✅ UPDATE progress
router.post("/progress", authMiddleware, async (req, res) => {
  const email = req.user.email;
  const { progress } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        progress,
      });
    } else {
      user.progress = {
        ...user.progress,
        ...progress,
      };
    }

    await user.save();

    res.json(user.progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET progress
router.get("/progress", authMiddleware, async (req, res) => {
  const email = req.user.email;

  try {
    const user = await User.findOne({ email });
    res.json(user?.progress || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ TOTAL USERS
router.get("/total-users", async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ totalUsers: count });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});
router.post("/notes", async (req, res) => {
  try {
    const { userId, notes } = req.body;

    let data = await UserData.findOne({ userId });

    if (!data) {
      data = new UserData({ userId, notes });
    } else {
      data.notes = notes;
    }

    await data.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/notes/:userId", async (req, res) => {
  try {
    let data = await UserData.findOne({
      userId: req.params.userId,
    });

    // ✅ AUTO CREATE IF NOT EXISTS
    if (!data) {
      data = new UserData({
        userId: req.params.userId,
        notes: {},
        revision: {},
      });

      await data.save();
    }

    res.json(data.notes);
  } catch (err) {
    console.log("NOTES ERROR:", err); // 👈 IMPORTANT
    res.status(500).json({ error: err.message });
  }
});
router.post("/revision", async (req, res) => {
  try {
    const { userId, revision } = req.body;

    let data = await UserData.findOne({ userId });

    if (!data) {
      data = new UserData({ userId, revision });
    } else {
      data.revision = revision;
    }

    await data.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/revision/:userId", async (req, res) => {
  try {
    let data = await UserData.findOne({
      userId: req.params.userId,
    });

    if (!data) {
      data = new UserData({
        userId: req.params.userId,
        notes: {},
        revision: {},
      });

      await data.save();
    }

    res.json(data.revision);
  } catch (err) {
    console.log("REVISION ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;