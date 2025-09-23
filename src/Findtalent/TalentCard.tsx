import React from 'react';
import { Paper, Avatar, Text, Badge, Button, Group } from '@mantine/core';
import { IconCash, IconMapPin, IconExternalLink } from '@tabler/icons-react';

// The TalentCard component now contains the data directly
function TalentCard(props:any) {
  // 1. Dummy data is now "inline" inside the component
  const talent = {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "SpringBoot", "MongoDB"],
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    expectedCtc: "₹48 - 60LPA",
    location: "New York, United States",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  };

  return (
    <Paper
      withBorder
      p="lg"
      radius="lg"
      className="bg-gray-900 border-gray-700/50 max-w-2xl mx-auto shadow-lg"
    >
      <div className="flex flex-col gap-5">
        
        {/* Header: Avatar, Name, Role, Company */}
        <div className="flex items-start gap-4">
          <Avatar src={props.image} size="xl" radius="xl" />
          <div>
            <Text fz="xl" fw={700} className="text-white">{props.name}</Text>
            <Text fz="sm" className="text-cyan-400">{props.role} at {props.company}</Text>
          </div>
        </div>

        {/* About Section */}
        <Text fz="sm" className="text-gray-400">
          {talent.about}
        </Text>
        
        {/* Top Skills */}
        <div>
          <Text fz="sm" fw={500} className="text-gray-300 mb-2">Top Skills:</Text>
          <Group gap="xs">
            {talent.topSkills.map((skill) => (
              <Badge key={skill} color="cyan" variant="light">
                {skill}
              </Badge>
            ))}
          </Group>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50"></div>
        
        {/* Details: CTC and Location */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <IconCash size={18} className="text-green-400" />
            <div>
              <Text fz="xs" c="dimmed">Expected CTC</Text>
              <Text fw={500}>{talent.expectedCtc}</Text>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <IconMapPin size={18} className="text-orange-400" />
            <div>
              <Text fz="xs" c="dimmed">Location</Text>
              <Text fw={500}>{talent.location}</Text>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          fullWidth
          variant="default"
          leftSection={<IconExternalLink size={16} />}
          className="bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          View Full Profile
        </Button>
      </div>
    </Paper>
  );
}


// You would render this component directly in your app like <TalentCard />
export default TalentCard;