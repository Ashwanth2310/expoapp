import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Container, TitleContainer, TeamCard, TeamName } from './styles';

const teams = [
  { name: 'Los Angeles Lakers', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png' },
  { name: 'Golden State Warriors', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/300px-Golden_State_Warriors_logo.svg.png' },
  { name: 'Chicago Bulls', logo:'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/300px-Chicago_Bulls_logo.svg.png' },
  { name: 'Boston Celtics', color: '#007A33' },
  { name: 'Miami Heat', color: '#98002E' },
  { name: 'New York Knicks', color: '#006BB6' },
  { name: 'Houston Rockets', color: '#CE1141' },
  { name: 'Philadelphia 76ers', color: '#006BB6' },
  { name: 'San Antonio Spurs', color: '#C4CED4' },
  { name: 'Toronto Raptors', color: '#CE1141' },
  { name: 'Milwaukee Bucks', color: '#00471B' },
  { name: 'Dallas Mavericks', color: '#00538C' },
  { name: 'Denver Nuggets', color: '#0E2240' },
  { name: 'Brooklyn Nets', color: '#000000' },
  { name: 'Phoenix Suns', color: '#1D1160' },
  { name: 'Utah Jazz', color: '#002B5C' },
  { name: 'Portland Trail Blazers', color: '#E03A3E' },
  { name: 'Sacramento Kings', color: '#5A2D81' },
  { name: 'Atlanta Hawks', color: '#E03A3E' },
  { name: 'Washington Wizards', color: '#002B5C' },
];

export default function HomeScreen() {
  return (
    <Container contentContainerStyle={{ padding: 16 }}>
      <ThemedView style={{ marginBottom: 16 }}>
        <ThemedText type="title">NBA Teams</ThemedText>
      </ThemedView>
      {teams.map((team, index) => (
        <TeamCard key={index}>
          <TeamName color={team.color}>{team.name}</TeamName>
        </TeamCard>
      ))}
    </Container>
  );
}
