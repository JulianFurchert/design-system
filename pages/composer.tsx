import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Kbd } from '../components/Kbd';
import { Separator } from '../components/Separator';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { Code } from '../components/Code';
import { Input } from '../components/Input';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { TabLink } from '../components/TabLink';
import { SimpleToggle } from '../components/SimpleToggle';
import { ScrollArea } from '../components/Scrollbar';
import { Tooltip } from '../components/Tooltip';
import { Slider } from '../components/Slider';
import { Dialog } from '../components/Dialog';
import { Popover } from '../components/Popover';
import { Checkbox } from '../components/Checkbox';
import { RadioGroup } from '../components/Radio';
import { ProgressBar } from '../components/ProgressBar';
import { AlertDialog } from '../components/AlertDialog';
import { Tabs } from '../components/Tabs';
import { Label } from '../components/Label';
import { Skeleton } from '../components/Skeleton';
import { Accordion } from '../components/Accordion';

import { Title } from '../composites/Title';
import { Subtitle } from '../composites/Subtitle';
import { Heading } from '../composites/Heading';
import { Subheading } from '../composites/Subheading';
import { Paragraph } from '../composites/Paragraph';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Color } from '../custom/Color';
import { Avatars } from '../custom/Avatars';

function Home() {
  return (
    <Box css={{ height: '100%' }}>
      <Box
        css={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          py: '$1',
          px: '$2',
          backgroundColor: '$loContrast',
          borderBottom: '1px solid $canvas',
        }}
      >
        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Flex css={{ alignItems: 'center' }}>
            <Box css={{ mr: '$1' }}>
              <IconButton variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path d="M2.5 2.5H12.5" stroke="currentColor" strokeLinecap="round" />
                  <path d="M2.5 7.5H12.5" stroke="currentColor" strokeLinecap="round" />
                  <path d="M2.5 12.5H12.5" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </IconButton>
            </Box>
            <Button variant="ghost" css={{ fontWeight: '400' }}>
              Drafts
            </Button>
            <Text css={{ color: '$gray500' }}>/</Text>
            <Button variant="ghost" css={{ fontWeight: '400' }}>
              Untitled
            </Button>
          </Flex>
          <Flex css={{ ai: 'center' }}>
            <Box>
              <Tooltip content="Insert (Cmd+P)" side="bottom" align="center">
                <IconButton variant="ghost">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.5 3V2H6.5V3V6.5H3H2V8.5H3H6.5V12V13H8.5V12V8.5H12H13V6.5H12H8.5V3Z"
                        fill="#0488FC"
                      />
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z"
                      fill="#0488FC"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
            <Separator orientation="vertical" size="1" css={{ mx: '$3' }} />
            <Box css={{ mr: '$3' }}>
              <Tooltip content="Frame (F)" side="bottom" align="center">
                <IconButton variant="ghost">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.28975 14.2949L10.293 13.4531L8.36328 9.23438L12.2695 8.96484L3.5 1.14999V12.7L6.36719 10.0859L8.28975 14.2949Z"
                      stroke="#0488FC"
                      fill="#CDE7FE"
                    ></path>
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip content="Box (B)" side="bottom" align="center">
                <IconButton variant="ghost">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.81126 1.64706C6.62184 2.87918 6.68264 3.88523 6.76844 5.30499C6.78411 5.56426 6.80061 5.83732 6.81658 6.12808C6.83107 6.39208 6.63754 6.62172 6.37491 6.65217C6.11228 6.68262 5.87134 6.50334 5.82505 6.24304L5.74891 5.81488L5.74751 5.80698L5.74757 5.80697C5.64404 5.16528 5.48351 4.25481 5.17803 3.44741C4.86239 2.61315 4.4486 2.04126 3.93439 1.86046C3.64993 1.76102 3.41899 1.84278 3.25864 2.01052C3.08743 2.18962 2.99757 2.47065 3.06266 2.75399C3.21456 3.34424 3.44624 3.9167 3.69832 4.51802C3.72078 4.57158 3.74342 4.62543 3.76618 4.67954C3.99536 5.22457 4.23615 5.7972 4.4164 6.39081L4.41688 6.39238C4.56196 6.87586 4.65642 7.2595 4.73082 7.56165C4.7603 7.68138 4.78663 7.78831 4.81172 7.88359C4.86764 8.09606 4.77832 8.32014 4.59158 8.43588C4.40483 8.55161 4.16441 8.53188 3.99903 8.38725C3.73745 8.15848 3.51497 7.92784 3.31813 7.71802C3.27623 7.67335 3.23599 7.63018 3.19701 7.58838C3.04774 7.42826 2.91709 7.28812 2.78331 7.16029C2.45985 6.85122 2.18394 6.68004 1.80581 6.64369L1.8032 6.64343C1.56114 6.61888 1.41399 6.66441 1.31752 6.72627C1.21894 6.78947 1.11982 6.90416 1.03779 7.11235C0.974298 7.29079 1.0096 7.63817 1.183 7.96911L1.18738 7.97747L1.1873 7.97751C1.39076 8.3843 1.73514 8.81549 2.17271 9.29261C2.38911 9.52857 2.62096 9.76808 2.86215 10.017L2.87419 10.0294C3.11001 10.2728 3.35418 10.5248 3.59172 10.7822C4.4254 11.6857 5.27638 12.7533 5.46257 14H11.5086C11.5636 12.4353 11.8755 11.268 12.2875 10.1346C12.4453 9.70042 12.612 9.28414 12.7825 8.85831C13.1097 8.0414 13.4509 7.18938 13.7705 6.10824C14.0989 4.99737 14.0097 4.37034 13.8613 4.03985C13.717 3.71858 13.4914 3.61787 13.3815 3.59606C13.1381 3.54774 13.0384 3.60947 12.9698 3.67901C12.867 3.78316 12.7698 3.98273 12.6921 4.30269C12.6166 4.61345 12.5752 4.96517 12.533 5.32501L12.5298 5.35285C12.4924 5.67242 12.4505 6.03016 12.3664 6.30098C12.3591 6.32872 12.3403 6.39048 12.3039 6.45073C12.2896 6.47431 12.2563 6.52576 12.1979 6.57539C12.1381 6.6261 12.0104 6.70818 11.8309 6.69312C11.6519 6.6781 11.5401 6.57649 11.4902 6.51769C11.441 6.45982 11.4166 6.40431 11.4064 6.37905C11.374 6.29889 11.3688 6.22183 11.3684 6.21495C11.3684 6.21471 11.3684 6.21455 11.3683 6.21449C11.3662 6.18952 11.3653 6.16555 11.3649 6.14783C11.3638 6.09607 11.366 5.97483 11.366 5.99375V5.98124L11.3661 5.98125C11.3748 5.63581 11.3912 5.29816 11.4073 4.96608C11.4428 4.23646 11.477 3.5337 11.4245 2.8342L11.4241 2.82934L11.4242 2.82934C11.3916 2.32997 11.0493 2.00228 10.7007 1.9228C10.5305 1.88401 10.369 1.90601 10.2346 1.9835C10.1029 2.05946 9.95532 2.21318 9.85737 2.51394L9.85627 2.51726C9.81522 2.6404 9.77294 2.87753 9.73602 3.2124C9.70041 3.53542 9.67334 3.91279 9.65152 4.29418C9.63286 4.62033 9.61781 4.9584 9.6043 5.26194C9.58724 5.64529 9.57263 5.97357 9.5563 6.1532C9.55566 6.16016 9.55488 6.1671 9.55396 6.17402C9.55394 6.17418 9.55391 6.17442 9.55387 6.17475C9.553 6.1816 9.54743 6.22574 9.53102 6.27505C9.52585 6.29055 9.5148 6.32156 9.49497 6.35785C9.48133 6.38282 9.43143 6.47226 9.32411 6.54051C9.26274 6.57954 9.17656 6.61517 9.07102 6.61843C8.96437 6.62172 8.87306 6.59085 8.80465 6.55119C8.68583 6.48232 8.63139 6.38545 8.61694 6.35919C8.58236 6.29634 8.56958 6.23952 8.56712 6.22859L8.56688 6.22752C8.56231 6.20761 8.55978 6.19114 8.55851 6.18225C8.55587 6.16376 8.55442 6.14728 8.55364 6.13737C8.55059 6.09904 8.54881 6.04539 8.5475 5.99283C8.5447 5.88064 8.5429 5.71798 8.54171 5.54767C8.53932 5.20582 8.53932 4.81919 8.53932 4.70952V4.70925C8.53932 3.66544 8.53835 2.65372 8.4471 1.64372C8.39179 1.24127 8.06274 1.00455 7.64357 1.00005C7.22395 0.995552 6.87914 1.22704 6.81126 1.64706ZM9.41216 1.3617C9.21466 0.448484 8.3991 0.00810324 7.6543 0.00011154C6.86448 -0.00836308 5.98758 0.465881 5.82361 1.49037L5.8236 1.49037L5.82315 1.49334C5.78236 1.7584 5.75225 2.01481 5.73086 2.26652C5.39419 1.67364 4.92618 1.14894 4.26547 0.916859L4.2649 0.916661C3.586 0.679114 2.94916 0.887087 2.53579 1.31952C2.13411 1.73971 1.94435 2.36742 2.09028 2.98746L2.09018 2.98748L2.09266 2.99713C2.26474 3.66808 2.52393 4.30316 2.77609 4.90465C2.79811 4.95717 2.82006 5.00941 2.84191 5.06139C3.02135 5.48842 3.19375 5.89866 3.33867 6.31256C2.964 5.98142 2.51922 5.70796 1.90273 5.6484C1.48861 5.60663 1.10387 5.67536 0.777769 5.88444C0.454203 6.0919 0.240634 6.40405 0.10415 6.75406L0.104069 6.75403L0.100831 6.76281C-0.0997077 7.30698 0.0521502 7.96325 0.294996 8.42896C0.563936 8.96499 0.987161 9.47942 1.43572 9.96851C1.66295 10.2163 1.90441 10.4656 2.14397 10.7129L2.15227 10.7214C2.39068 10.9675 2.6276 11.212 2.85681 11.4604C3.80755 12.4907 4.49999 13.4637 4.49999 14.5C4.49999 14.7761 4.72384 15 4.99999 15H12C12.2761 15 12.5 14.7761 12.5 14.5C12.5 12.8212 12.8021 11.6462 13.2273 10.4763C13.3653 10.0968 13.5215 9.70582 13.6867 9.29251C14.0238 8.44925 14.398 7.513 14.7295 6.39175C15.0956 5.15324 15.0559 4.25903 14.7735 3.63017C14.4869 2.99207 13.9797 2.6953 13.5762 2.6152C13.1276 2.52614 12.7367 2.60475 12.4268 2.83081C12.4252 2.80773 12.4236 2.78468 12.4219 2.76167C12.3587 1.8105 11.6907 1.12285 10.923 0.947821C10.5346 0.859287 10.1111 0.900393 9.73505 1.11724C9.61849 1.18446 9.51051 1.26623 9.41216 1.3617ZM8.90706 2.20261C8.90725 2.20206 8.90743 2.20151 8.90761 2.20096L9.38194 2.35911L8.90652 2.20428C8.9067 2.20372 8.90688 2.20317 8.90706 2.20261Z"
                      fill="#0488FC"
                    ></path>
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
            <Separator orientation="vertical" size="1" css={{ mx: '$3' }} />
            <Box css={{ mr: '$3' }}>
              <Tooltip content="Frame (F)" side="bottom" align="center">
                <IconButton variant="ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 3.5C1 3.22386 1.22386 3 1.5 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H1.5C1.22386 4 1 3.77614 1 3.5Z"
                      fill="#0488FC"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="#0488FC"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.5 1C3.77614 1 4 1.22386 4 1.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V1.5C3 1.22386 3.22386 1 3.5 1Z"
                      fill="#0488FC"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1Z"
                      fill="#0488FC"
                    />
                    <rect x="4" y="4" width="7" height="7" fill="#CDE7FE" />
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
            <Box css={{ mr: '$3' }}>
              <Tooltip
                content="Like how in Gmail, the search input is left aligned with the content you're searching. I don't think it works well to have a tiny search button hidden over in the corner, disjointed from the content you're searching."
                side="bottom"
                align="center"
                multiline
              >
                <IconButton variant="ghost">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M12 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V12C2.5 12.2761 2.72386 12.5 3 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V3C12.5 2.72386 12.2761 2.5 12 2.5Z"
                        fill="#0488FC"
                      />
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                      fill="#0488FC"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip content="Text (T)" side="bottom" align="center">
                <IconButton variant="ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.5 2.05C3.22386 2.05 3 2.27386 3 2.55V4.2C3 4.47615 3.22386 4.7 3.5 4.7C3.77614 4.7 4 4.47615 4 4.2V3.05H7V11.95H6C5.72386 11.95 5.5 12.1739 5.5 12.45C5.5 12.7261 5.72386 12.95 6 12.95H7.5H9C9.27614 12.95 9.5 12.7261 9.5 12.45C9.5 12.1739 9.27614 11.95 9 11.95H8V3.05H11V4.2C11 4.47615 11.2239 4.7 11.5 4.7C11.7761 4.7 12 4.47615 12 4.2V2.55C12 2.27386 11.7761 2.05 11.5 2.05H7.5H3.5Z"
                      fill="#0488FC"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
            <Separator orientation="vertical" size="1" css={{ mx: '$3' }} />
            <Box css={{ mr: '$3' }}>
              <Tooltip content="Frame (F)" side="bottom" align="center">
                <IconButton variant="ghost">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 3L2.49999 3.00002C1.67157 3.00002 0.999999 3.67159 0.999999 4.50002V9.50002C0.999999 10.3284 1.67157 11 2.5 11H7.50002C7.63263 11 7.75981 11.0527 7.85358 11.1465L9.99999 13.2929V11.5C9.99999 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3284 14 9.50002V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11928 15 4.5V9.50002C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8535L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50002V4.50002C0 3.11931 1.11928 2.00002 2.49999 2.00002Z"
                      fill="#0488FC"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
          </Flex>
          <Flex css={{ alignItems: 'center' }}>
            <Avatar size="2" shape="circle" fallback="C" />

            <Button variant="blue" css={{ ml: '$3' }}>
              Share
            </Button>
            <IconButton variant="ghost" css={{ ml: '$2' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M3.5 14.5V0.5L11.5 7.5L3.5 14.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
            <Box css={{ width: '50px', flexShrink: 0, textAlign: 'center' }}>
              <Text size="1" css={{ color: '$gray900', userSelect: 'none' }}>
                100%
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box css={{ bc: '$canvas', height: '100%', px: 250, pt: '36px' }}>
        <Layers />
        <Properties />
      </Box>
    </Box>
  );
}

export default Home;
