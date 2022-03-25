import React from 'react'
import { Flex } from '@loopstarter/uikit'
import styled from 'styled-components'
import Footer from 'views/Home/components/Footer'
import { PageMeta } from 'components/Layout/Page'
import Banner from './components/Banner'

const BgWrapper = styled(Flex)`
  background-image: url('/images/policy/bg.jpg');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 187px 16px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 93px 0 0;
  }
`

const Section = styled.div`
  width: 1404px;
  margin: 0 auto;
`

const Text = styled.p<{ padding?: string }>`
  font-family: FSMagistralLight;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  color: #fff;
  padding: ${({ padding }) => padding || '0 0 20px'};
  a {
    color: #0c37e9;
  }
`

const Title = styled(Text)`
  font-family: FSMagistralBold;
  line-height: 30px;
  padding: 0 0 15px;
`

const Ul = styled.ul`
  color: #ffffff;
`
const Li = styled.li<{ padding?: string }>`
  font-family: FSMagistralLight;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  color: #fff;
  padding: ${({ padding }) => padding || '0 0 20px'};
`
const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <PageMeta />
      <BgWrapper>
        <Section>
          <Banner />
          <Text>
            This Privacy Policy describes how LOOPStarter (referred to herein as “LOOPStarter”, “we”, “us” or “our”), a
            company formed pursuant to the laws of the Republic of Panama, will manage end user’s personal data
            collected. This Policy, in consonance with our Terms, applies to your use of LOOPStarter platform.
          </Text>
          <Text>
            By accessing the platform and using our services, you consent to the collection, storage, use, and
            disclosure of your personal data, in accordance with this Privacy Policy. We will not collect any
            information from you, except where it is knowingly and explicitly provided by you.
          </Text>
          <Text>
            LOOPStarter is committed to respecting your privacy and ensuring that the personal data we collect about you
            is protected and is used, stored and disclosed in accordance with this Privacy Policy. Please read this
            Policy carefully to understand our practices regarding your personal data and how we will treat it. If you
            do not agree with this Privacy Policy, please do not use our services or provide LOOPStarter platforms with
            your personal data.
          </Text>
          <Title>1. Reasons We Collect Your Data</Title>
          <Text>
            1.1. LOOPStarter will collect your Personal Data only by lawful and fair means for the following purposes.
            One or more purposes may apply simultaneously.
          </Text>
          <Ul>
            <Li>To verify your identity for security purposes;</Li>
            <Li>
              To provide services to you as a user, for example, processing your requests or managing your account;
            </Li>
            <Li>To update you on technical progress of LOOPStarter;</Li>
            <Li>To contact you in relation to the management and administration of your LOOPStarter account</Li>
            <Li>
              To email you our newsletter or communicate with you in other form about our products or services that we
              think may be of interest to you;
            </Li>
            <Li>
              To take appropriate action if LOOPStarter has reason to suspect that unlawful activity or misconduct of a
              serious nature has been, is being or may be engaged in that relates to our functions and activities;
            </Li>
            <Li>To comply with a legal or regulatory obligation.</Li>
          </Ul>
          <Text>
            1.2. You may choose to deal with us on an anonymous basis or to use a pseudonym unless it is not practicable
            for us to deal with individuals who we cannot identify or we are required by law to only deal with
            identified individuals. Also, if you do not provide LOOPStarter with the Personal Data we request, we may be
            unable to process your request to become a User, provide you with our services or respond to your enquiry or
            complaint. Examples of Personal Data That may be collected by LOOPStarter include your name, email address,
            telephone numbers, your date of birth, other verification information such as your Service usage activities.
            By becoming a User or otherwise choosing to provide LOOPStarter with Personal Data You consent to
            LOOPStarter collecting, using and disclosing your Personal Data For the above purposes.
          </Text>
          <Title>2. Types of Data We Collect</Title>
          <Text>2.1. The types of Personal Data that Red Kite may collect from you are:</Text>
          <Ul>
            <Li>
              Personal identification information: name, email address, country, date of birth, nationality, photo of
              identification document (national ID card or passport), photo of you holding your identification document;
            </Li>
            <Li>User non-custodial wallet address, telegram username.</Li>
          </Ul>
          <Text>
            2.2. With regard to each of your visits to our LOOPStarter platform and access to the services we may
            automatically collect the following information:
          </Text>
          <Ul>
            <Li>Transaction data including purchases of crypto assets;</Li>
            <Li>The smart contract stored in your non-custodial wallet address;</Li>
            <Li>
              Technical data including IP address, time zone setting and locations, operating system, and other
              technologies on your device used to access the platform;
            </Li>
            <Li>
              Information about your visits, including the full Uniform Resource Locators (URL) click stream to, through
              and from the LOOPStarter (including date and time);
            </Li>
            <Li>
              Products or pools you viewed or searched for; page response times, download errors, length of visits to
              certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used
              to browse away from the page;
            </Li>
            <Li>
              Information regarding the provision of LOOPStarter services we might receive from any other sources.
            </Li>
          </Ul>
          <Title>3. Collection of Your Data</Title>
          <Text>
            3.1. You directly provide LOOPStarter with most of the data we collect. We collect data and process data
            when you:
          </Text>
          <Ul>
            <Li>Register online and use the LOOPStarter platform services;</Li>
            <Li>Voluntarily complete a Client survey or provide feedback on any of our message boards or via email;</Li>
            <Li>Contact us, we will keep a record of the information shared during the correspondence.</Li>
          </Ul>
          <Text>
            3.2. Additionally, we may receive information about you from publicly available sources and collect
            technical and usage data automatically when you use our services. For example, we may aggregate your usage
            data to calculate the percentage of users accessing a specific feature of the services.
          </Text>
          <Title>4. Management of Your Data</Title>
          <Text>
            4.1. LOOPStarter will take all reasonable steps to ensure that the Personal Data which it collects, uses or
            discloses is correct and is stored in a secure environment which is accessed only by authorised persons.
          </Text>
          <Text>
            4.2. LOOPStarter will destroy or permanently de-identify the Personal Data we hold when it is no longer
            required for any purpose permitted.
          </Text>
          <Title>5. Security of Your Data</Title>
          <Text>
            5.1. The security of your Personal Data is important to us, but remember that no method of transmission over
            the Internet, or method of electronic storage is totally secure. Therefore, we cannot warrant its absolute
            security of any information which you transmit. Any information which you transmit to LOOPStarter is
            transmitted at your own risk.
          </Text>
          <Ul>
            <Li>
              Remember to always log out of your account when you have completed your time on the website. This is
              particularly important if you share a computer with another person. You are responsible for the security
              of and access to your own computer, mobile device or any other handset used to access the website.
            </Li>
            <Li>
              Ultimately, you are solely responsible for maintaining the secrecy of your username, password and any
              account information. Please be careful whenever using the Internet and our website.
            </Li>
          </Ul>
          <Text>
            5.2. However, we strive to use commercially acceptable means to protect your Personal Data, from misuse,
            loss and unauthorized access, modification and disclosure including by using password protected systems and
            databases and security technology. LOOPStarter employees, agents and contractors are required to maintain
            the confidentiality of users’ Personal Information and trading behavior. We will comply with the
            requirements of applicable laws in the event of a data or security risk.
          </Text>
          <Title>6. Law Enforcement</Title>
          <Text>
            Under certain circumstances, LOOPStarter may be required to disclose your Personal Data if required to do so
            by law or in response to valid requests by public authorities (e.g., a court or a government agency).
          </Text>
          <Title>7. Business Transactions</Title>
          <Text>
            You are aware that if Red Kite is ever involved in a merger, acquisition by another organization or goes
            through asset sale, your personal data might be among the assets transferred. We will provide notice before
            your Personal Data is transferred and becomes subject to a different Privacy Policy.
          </Text>
          <Title>8. Link to Other Third Parties</Title>
          <Text>
            Under certain circumstances, LOOPStarter may be required to disclose your Personal Data if required to do so
            by law or in response to valid requests by public authorities (e.g., a court or a government agency).
          </Text>
          <Title>9. Contact Details</Title>
          <Text>
            If you believe that someone has provided us with your Personal Data and you would like to request that it be
            removed from our database, please contact us at our contact email as specified below. Besides, if you have
            any queries, requests for access or correction or complaints relating to the handling of your personal data,
            please also contact us by email.
          </Text>
          <Text padding="0 0 80px">
            Email:{' '}
            <a href="mailto:support@loopstarter.com" target="_blank">
              support@loopstarter.com
            </a>
          </Text>
        </Section>
      </BgWrapper>
      <Footer bg="url(/images/policy/footer.jpg)" />
    </>
  )
}

export default PrivacyPolicy
