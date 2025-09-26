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
      className="bg-white dark:bg-gray-900 border-faded-jade-200/60 dark:border-gray-700/60 text-gray-900 dark:text-white shadow-[0px_10px_30px_rgba(19,121,111,0.1)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] transition-colors duration-200 max-w-md hover:border-teal-400/70 dark:hover:border-cyan-400/70 hover:shadow-teal-500/10"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <Avatar src={image} size="xl" radius="xl" />
          <div>
            <Text fz="xl" fw={700} className="text-faded-jade-700 dark:text-white">
              {name}
            </Text>
            <Text fz="sm" className="text-faded-jade-500 dark:text-cyan-300">
              {role} at {company}
            </Text>
          </div>
        </div>

        <Text fz="sm" className="text-gray-600 dark:text-gray-300">
          {about}
        </Text>

        <div>
          <Text fz="sm" fw={500} className="text-gray-700 dark:text-gray-300 mb-2">
            Top Skills:
          </Text>
          <Group gap="xs">
            {topSkills.map((skill) => (
              <Badge key={skill} color="cyan" variant="light">
                {skill}
              </Badge>
            ))}
          </Group>
        </div>

        <div className="border-t border-faded-jade-200/60 dark:border-gray-700/60"></div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <IconCash size={18} className="text-emerald-500" />
            <div>
              <Text fz="xs" c="dimmed">
                Expected CTC
              </Text>
              <Text fw={500}>{expectedCtc}</Text>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <IconMapPin size={18} className="text-orange-500" />
            <div>
              <Text fz="xs" c="dimmed">
                Location
              </Text>
              <Text fw={500}>{location}</Text>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            component={Link}
            to="/Talent-Profile"
            fullWidth
            variant="default"
            leftSection={<IconExternalLink size={16} />}
            className="bg-faded-jade-100/80 dark:bg-gray-800 text-faded-jade-700 dark:text-gray-200 hover:bg-faded-jade-100 dark:hover:bg-gray-700 transition-colors"
          >
            View Full Profile
          </Button>
          <Button
            fullWidth
            variant="default"
            leftSection={<IconExternalLink size={16} />}
            className="bg-faded-jade-100/80 dark:bg-gray-800 text-faded-jade-700 dark:text-gray-200 hover:bg-faded-jade-100 dark:hover:bg-gray-700 transition-colors"
          >
            Message
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default TalentCard;
