import React from 'react';
import { Avatar, Card, Container, Grid, Group, Text, Title } from '@mantine/core';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO & Co-Founder',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Peter Jones',
    role: 'Lead Designer',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Sara Johnson',
    role: 'Lead Developer',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

function AboutUsPage() {
  return (
    <Container size="lg" className="py-16 px-4">
      <div className="text-center mb-16">
        <Title order={1} className="text-4xl font-bold text-gray-800 dark:text-white mb-4" ta="center">
          About SlotSync
        </Title>
        <Text size="xl" className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" ta="center">
          Our mission is to streamline the job search process and connect talented individuals with their dream careers. We believe in a future where finding a job is a seamless and enjoyable experience.
        </Text>
      </div>

      <div className="mb-16">
        <Title order={2} className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Meet Our Team
        </Title>
        <Grid gutter="xl">
          {teamMembers.map((member) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={member.name}>
              <Card shadow="sm" padding="lg" radius="md" withBorder className="text-center">
                <Avatar src={member.avatar} size={120} radius={120} mx="auto" className="mb-4" />
                <Text fw={500}>{member.name}</Text>
                <Text size="sm" c="dimmed">{member.role}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </div>

      <div className="text-center">
        <Title order={2} className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Join Us on Our Journey
        </Title>
        <Text size="lg" className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We are always looking for passionate individuals to join our team. If you are excited about our mission, we would love to hear from you.
        </Text>
      </div>
    </Container>
  );
}

export default AboutUsPage;