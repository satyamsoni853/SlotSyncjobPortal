import React from 'react';
import { Paper, Avatar, Text, Badge, Button, Group } from '@mantine/core';
import { IconCash, IconMapPin, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface TalentCardProps {
  name: string;
  role: string;
  company: string;
  topSkills: string[];
  about: string;
  expectedCtc: string;
  location: string;
  image: string;
}

function TalentCard({
  name,
  role,
  company,
  topSkills,
  about,
  expectedCtc,
  location,
  image,
}: TalentCardProps) {
  return (
    <Paper
      withBorder
      p="lg"
      radius="lg"
      className="bg-gray-900  border-gray-700/50 max-w-md shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:scale-105"
    >
      <div className="flex flex-col gap-5">
        
        {/* Header: Avatar, Name, Role, Company */}
        <div className="flex items-start gap-4">
          <Avatar src={image} size="xl" radius="xl" />
          <div>
            <Text fz="xl" fw={700} className="text-white">{name}</Text>
            <Text fz="sm" className="text-cyan-400">{role} at {company}</Text>
          </div>
        </div>

        {/* About Section */}
        <Text fz="sm" className="text-gray-400">
          {about}
        </Text>
        
        {/* Top Skills */}
        <div>
          <Text fz="sm" fw={500} className="text-gray-300 mb-2">Top Skills:</Text>
          <Group gap="xs">
            {topSkills.map((skill) => (
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
              <Text fw={500}>{expectedCtc}</Text>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <IconMapPin size={18} className="text-orange-400" />
            <div>
              <Text fz="xs" c="dimmed">Location</Text>
              <Text fw={500}>{location}</Text>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link to="/Talent-Profile">
        <Button
          fullWidth
          variant="default"
          leftSection={<IconExternalLink size={16} />}
          className="bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          View Full Profile
        </Button></Link>
        <Button
          fullWidth
          variant="default"
          leftSection={<IconExternalLink size={16} />}
          className="bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          Message
        </Button>
      </div>
    </Paper>
  );
}


export default TalentCard;