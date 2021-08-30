import React from 'react';
import {Text, IconButton, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function GitHubLink() {
  return (
    <Link
      href="https://github.com/yahyajideh/chakra-ui-todo"
      isExternal
      pt="8"
      color="gray.400"
      _hover={{color: "#6e5494", fontWeight: "semibold"}}
    >
      <Text>view code here:
        <IconButton
          icon={<FaGithub/>}
          isRound="true"
          variant="ghost"
          _hover={{variant: "ghost", color: "#6e5494"}}
        />
      </Text>
    </Link>
  )
}
