const jobsDatabase = [
    {
      category: "Agriculture",
      jobs: [
        {
          id: 1,
          title: "Farm Laborer",
          description: "Assist in planting, cultivating, and harvesting crops.",
          skillsRequired: ["Physical fitness", "Basic farming knowledge"],
          location: "Local farms",
          salaryRange: "₹8,000 - ₹12,000 per month"
        },
        {
          id: 2,
          title: "Agriculture Equipment Operator",
          description: "Operate and maintain farming equipment like tractors.",
          skillsRequired: ["Machinery operation", "Basic maintenance"],
          location: "Regional farms",
          salaryRange: "₹10,000 - ₹15,000 per month"
        }
      ]
    },
    {
      category: "Handicrafts and Artisanship",
      jobs: [
        {
          id: 3,
          title: "Weaver",
          description: "Create handmade fabrics and traditional designs.",
          skillsRequired: ["Weaving", "Design skills"],
          location: "Workshops or home-based",
          salaryRange: "₹5,000 - ₹10,000 per month"
        },
        {
          id: 4,
          title: "Pottery Maker",
          description: "Design and produce clay-based items.",
          skillsRequired: ["Pottery making", "Creativity"],
          location: "Home-based or studio",
          salaryRange: "₹6,000 - ₹12,000 per month"
        }
      ]
    },
  
    {
      category: "Education",
      jobs: [
        {
          id: 7,
          title: "Primary School Teacher",
          description: "Teach basic subjects to children in local schools.",
          skillsRequired: ["Teaching skills", "Patience"],
          location: "Village schools",
          salaryRange: "₹10,000 - ₹15,000 per month"
        },
        {
          id: 8,
          title: "Digital Literacy Trainer",
          description: "Train villagers on basic computer and internet skills.",
          skillsRequired: ["Computer skills", "Teaching ability"],
          location: "Training centers",
          salaryRange: "₹12,000 - ₹18,000 per month"
        }
      ]
    },
    {
      category: "Healthcare",
      jobs: [
        {
          id: 9,
          title: "Community Health Worker",
          description: "Provide basic healthcare and awareness in the community.",
          skillsRequired: ["First aid", "Communication"],
          location: "Villages or local clinics",
          salaryRange: "₹8,000 - ₹12,000 per month"
        },
        {
          id: 10,
          title: "Nurse/Midwife",
          description: "Assist in childbirth and provide healthcare support.",
          skillsRequired: ["Nursing", "Empathy"],
          location: "Local healthcare centers",
          salaryRange: "₹15,000 - ₹25,000 per month"
        }
      ]
    },

    {
      category: "Local Services",
      jobs: [
        {
          id: 8,
          title: "Tailor",
          description: "Stitch clothes and provide tailoring services.",
          skillsRequired: ["Sewing", "Attention to detail"],
          location: "Villages",
          salaryRange: "₹7,000 - ₹12,000 per month"
        },
        {
          id: 9,
          title: "Carpenter",
          description: "Craft furniture and repair wooden structures.",
          skillsRequired: ["Carpentry", "Creativity"],
          location: "Local workshops",
          salaryRange: "₹9,000 - ₹15,000 per month"
        }
      ]
    },
    {
      category: "Transportation",
      jobs: [
        {
          id: 12,
          title: "Driver",
          description: "Provide transportation services within the community.",
          skillsRequired: ["Driving", "Knowledge of routes"],
          location: "Villages and nearby areas",
          salaryRange: "₹10,000 - ₹15,000 per month"
        },
        {
          id: 13,
          title: "Mechanic",
          description: "Repair and maintain vehicles.",
          skillsRequired: ["Vehicle repair", "Technical skills"],
          location: "Local garages",
          salaryRange: "₹12,000 - ₹18,000 per month"
        },
      ]
    },
  ];

  module.exports = { data: jobsDatabase };