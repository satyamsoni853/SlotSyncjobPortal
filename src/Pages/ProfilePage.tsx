import React from 'react';
import { Avatar, Card, Container, Grid, Group, Text, Title, Paper, Badge, Button } from '@mantine/core';
import ExperienceCard from '../TalentProfile/ExperienceCard';
import CertificationCard from '../TalentProfile/CertificationCard';

function ProfilePage() {
  const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL', 'PostgreSQL', 'Docker'];

  return (
    <Container size="lg" className="py-10">
      <Paper shadow="md" radius="lg">
        <div className="h-48 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-t-lg" />
        <div className="px-6 py-4">
          <div className="flex items-end -mt-20">
            <Avatar
              src="https://randomuser.me/api/portraits/men/75.jpg"
              size={150}
              radius="50%"
              className="border-4 border-white dark:border-gray-800"
            />
            <div className="ml-4">
              <Title order={2} className="text-2xl font-bold text-gray-800 dark:text-white">
                John Doe
              </Title>
              <Text className="text-gray-600 dark:text-gray-400">Software Engineer at Innovatech</Text>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <Title order={3} className="text-xl font-semibold text-gray-800 dark:text-white">
                About Me
              </Title>
              <Button variant="light" color="teal" size="sm">
                Edit Profile
              </Button>
            </div>
            <Text className="text-gray-700 dark:text-gray-300">
              I am a passionate software engineer with over 5 years of experience in building scalable web applications. I love working with modern technologies and solving complex problems.
            </Text>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Title order={3} className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Skills
            </Title>
            <Group >
              {skills.map((skill) => (
                <Badge key={skill} variant="light" color="teal" size="lg">
                  {skill}
                </Badge>
              ))}
            </Group>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Title order={3} className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Experience
            </Title>
            <div className="space-y-6">
              <ExperienceCard />
              <ExperienceCard />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Title order={3} className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Certifications
            </Title>
            <div className="space-y-6">
              <CertificationCard />
            </div>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default ProfilePage;