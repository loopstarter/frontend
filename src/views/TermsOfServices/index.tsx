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

const TermsOfServices: React.FC = () => {
  return (
    <>
      <PageMeta />
      <BgWrapper>
        <Section>
          <Banner />
          <Text>
            This end-user agreement (the &quot;Agreement&quot;) should be read by you (the &quot;User&quot; or
            &quot;you&quot;) in its entirety prior to your use of LOOPStarter service or products. Be aware that this
            Agreement constitutes a legally binding agreement between you and LOOPStarter (referred to herein as
            &quot;LOOPStarter&quot;, &quot;us&quot; or &quot;we&quot;) which owns and operates the website on the
            Internet and the Service at https://loopstarter.com (the &quot;Service&quot;). By accessing or using the
            site or LOOPStarter Services, you agree that you have read, understood, and agree to be bound by this
            agreement.
          </Text>

          <Title>1. General Conditions of use</Title>
          <Text>
            1.1. By signing up to use an Account through any of the LOOPStarter Clients’ social websites made available
            through the LOOPStarter Platform, you agree to comply with and be legally bound by this Agreement. If you do
            not agree to any of the terms set forth in this Agreement or any subsequent modification to the Agreement,
            you may not access or use any of the LOOPStarter Services and must cancel your LOOPStarter Account
            immediately.
          </Text>

          <Text>
            1.2. We may amend or modify this Agreement by posting such amended or modified Agreement (“Revised
            Agreement”) on the LOOPStarter Platform or by notifying you about the changes via email. By continuing to
            access or use the LOOPStarter Services once the Revised Agreement is effective, you agree to be bound by its
            terms.
          </Text>
          <Text>
            1.3. To be eligible to use the LOOPStarter Services, you must be at least 18 years old (or the applicable
            age of majority and contractual capacity in each qualifying jurisdiction). By accessing or using the
            LOOPStarter Services you represent and warrant that you are 18 or older.
          </Text>
          <Text>
            1.4. LOOPStarter disclaims any and all warranties, expressed or implied, in connection with the service
            which is provided to you "as is" and we provide you with no warranty or representation whatsoever regarding
            its quality, fitness for purpose, completeness, or accuracy.
          </Text>
          <Text>
            1.5. The term "LOOPStarter", its domain names and any other trademarks, or service marks used by LOOPStarter
            as part of the Service (the "Trademarks"), are solely owned by LOOPStarter. In addition, all content on the
            website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos,
            music, audio, and text (the "Site Content") belongs to LOOPStarter and is protected by copyright and/or
            other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no
            rights in the Site Content and/or the Trademarks, or any part thereof. Under no circumstances may you use
            the Site Content and/or the Trade Marks without LOOPStarter’s prior written consent. Additionally, you agree
            not to do anything that will harm or potentially harm the rights, including the intellectual property rights
            of LOOPStarter.
          </Text>
          <Title>2. Authority/Terms of Service</Title>
          <Text>
            You agree to the rules of the Service provided and described on the https://loopstarter.com website.
            LOOPStarter retains all authority over the issuing, maintenance, and closing of the Service. The decision of
            LOOPStarter’s management, concerning any use of the Service, or dispute resolution, is final and shall not
            be open to review or appeal.
          </Text>

          <Title>3. Your Representations and Warranties</Title>
          <Text>
            Prior to your use of the Service and on an ongoing basis you represent, warrant, covenant, and agree that:
          </Text>

          <Text>
            3.1. There is a risk of losing cryptocurrency & other funds of value when using the Service and LOOPStarter
            has no responsibility to you for any such loss;
          </Text>
          <Text>
            3.2. Your use of the Service is at your sole option, discretion, and risk. You hereby accept full
            responsibility for any consequences that may arise from your use of the Services, and expressly agree and
            acknowledge that Red Kite shall have absolutely no liability in this regard.
          </Text>
          <Text>
            3.3. You are solely responsible for any applicable taxes which may be payable on cryptocurrency traded or
            transacted by you through your using the Service;
          </Text>
          <Text>
            3.4. Any cryptographic tokens, blockchain technology, or distributed ledger technology-related projects are
            new and relatively untested, and outside of both our and our Clients’ exclusive control. Any adverse changes
            in market forces, technology, and regulatory environment impacting our performance under this Agreement
            shall absolve us from responsibility in this regard, including but not limited to hacking attacks, possible
            theft, unfavorable regulatory action, or unclear legal/tax status of cryptographic tokens.
          </Text>
          <Text>
            3.5. (i) You are eighteen years of age or older, (ii) you are of the age of majority in your jurisdiction,
            (iii) you are accessing the Service from a jurisdiction in which it is legal to do so, (iv) your use of the
            Services is not prohibited by applicable law, and at all times compliant with applicable law; and (v) you
            are solely responsible for use of the Services and, if applicable, for all activities that occur on or
            through your User Account.
          </Text>
          <Title>4. Prohibited Uses & Termination</Title>
          <Text>
            4.1. In connection with your use of the LOOPStarter Services, and your interactions with other Users, and
            third parties you agree and represent you will not engage in any illegal, unauthorized, or improper
            activity, which are:
          </Text>
          <Ul>
            <Li>
              Infringe any proprietary rights, including but not limited to copyrights, patents, trademarks, or trade
              secrets of LOOPStarter;
            </Li>
            <Li>Create multiple accounts, including for collusion and/or abuse of service;</Li>
            <Li>
              Use the Services to transmit any data or send or upload any material that contains viruses, Trojan horses,
              worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programs or similar computer
              code designed to adversely affect the operation of any computer software or hardware;
            </Li>
            <Li>
              Make any backup or archival copies of the Platform or any part thereof, including disassembling or
              de-compilation of the Platform;
            </Li>
          </Ul>
          <Text>
            4.2. We reserve the right to (a) modify or discontinue any portion of the LOOPStarter Services, and (b)
            suspend or terminate your access to the LOOPStarter Services, at any time, and from time to time, without
            notice to you in certain, limited circumstances described herein. You agree that we shall not be liable to
            you or any third party for any modification or termination of the LOOPStarter Services, or suspension or
            termination of your access to the LOOPStarter Services, except to the extent otherwise expressly set forth
            herein.
          </Text>
          <Title>5. Know your Customer (“KYC”) and Anti-Money Laundering (AML) Policy</Title>
          <Text>
            LOOPStarter is a permission less, fully decentralized platform for token sales, swaps, and decentralized
            exchange. As a software development company, LOOPStarter has no role in enforcing KYC by default, however,
            we do provide such tools for fundraising entities using LOOPStarter to enforce on their users, if the
            entities choose to do so. The use of KYC/AML tools on Red Kite by fundraising entities using the Service is
            completely at the discretion of said entities.
          </Text>
          <Text>
            Although LOOPStarter makes no warranty as to the merit, legality, or juridical nature of any token
            (including whether or not it is considered a security or financial instrument under any applicable
            Securities Laws), token sale or fundraiser on top of Red Kite, we nonetheless understand the need of some
            token projects to require KYC/AML on their token sale participants.
          </Text>
          <Text>
            Therefore, and at the sole behest of fundraising entities and/or competent regulatory authorities,
            LOOPStarter reserves the right at any time:
          </Text>
          <Ul>
            <Li>
              To ask for any KYC documentation it deems necessary to determine the identity and location of a User.
            </Li>
            <Li>To restrict service and payment until identity is sufficiently determined.</Li>
            <Li>
              To share submitted KYC information and documentation to 3rd parties to verify the authenticity of
              submitted information, and the end-user (you) agrees to this by using the Service.
            </Li>
            <Li>
              To confiscate any and all funds that are found to be in violation of relevant and applicable anti-money
              laundering (AML) and countering terrorism financing (CFT) laws and regulations, and to cooperate with the
              competent authorities when and if necessary.
            </Li>
          </Ul>

          <Title>6. Retention of Intellectual Property Rights of LOOPStarter Platform and LOOPStarter clients</Title>
          <Text>
            The LOOPStarter Platform and all LOOPStarter Services, including their design elements or concepts and any
            underlying intellectual property, including, but not limited to, all trademarks, are the property of
            LOOPStarter and/or LOOPStarter Customers (as applicable), and are protected by copyright, patent, trade
            secret, and other intellectual property laws.
          </Text>
          <Text>
            LOOPStarter and LOOPStarter Clients retain any and all rights, title, and interest in and to LOOPStarter
            Platform and LOOPStarter Services (including, without limitation, all intellectual property rights),
            including all copies, modifications, extensions, and derivative works thereof. Your right to use the
            LOOPStarter Platform and LOOPStarterServices is limited to the rights expressly granted in these Terms.
            Except as stated in these Terms, nothing in these Terms should be construed as conferring any right in or
            license to LOOPStarter’s or any third party’s intellectual rights.
          </Text>
          <Text>
            You may not: Copy, create derivative works, distribute, publish, reverse engineer, decompile, disassemble,
            modify, or translate the LOOPStarter website or the Service; or Use the Service that in any way is
            prohibited by applicable laws or regulations (each of the above herein defined as an "Unauthorized Use").
            You agree that you will be solely responsible for any damage, costs, or expenses arising out of or in
            connection with any unauthorized use by you
          </Text>
          <Title>7. Jurisdiction and Governing Law</Title>
          <Text>
            7.1. The laws of Panama (with the exclusion of any rules that might lead to the use of any other law which
            is not the law of Panama) will govern the validity and construction of this Agreement, any separate
            agreement whereby we provide you any services and any dispute arising out of or in relation to this
            Agreement or such separate agreement.
          </Text>
          <Text>
            7.2. Citizens and residents of and persons located in the United States of America, China, Hong Kong, and
            all sanctioned OFAC countries (DR Congo, Iran, Myanmar, Sudan, Iraq, Ivory Coast, North Korea, Syria,
            Zimbabwe, Cuba, Belarus, Liberia) (the ”Prohibited Jurisdictions”) are not permitted to make use of the
            Service.
          </Text>
          <Title>8. Third-party services</Title>
          <Text>
            The Services may include services, content, and information owned, made available, or otherwise licensed by
            a third party (“Third-Party Services”) or contain links to Third Party Services. You understand that
            Third-Party Services are the responsibility of the third party that created or provided it and acknowledges
            that the use of such Third Party Services is solely at your own risk.
          </Text>
          <Text>
            Red Kite makes no representations and excludes all warranties and liabilities arising out of or pertaining
            to such Third Party Services, including its accuracy or completeness.
          </Text>
          <Text>
            All intellectual property rights in and to Third-Party Services are the property of the respective third
            parties.
          </Text>
          <Title>9. Breach</Title>
          <Text>
            9.1. Without prejudice to any other rights, if a User breaches in whole or in part any provision contained
            herein, LOOPStarter reserves the right to take such action as it sees fit, including terminating this
            Agreement or any other agreement in place with the User and/or taking legal action against such User.
          </Text>
          <Text>
            9.2. You agree to indemnify and hold harmless LOOPStarter, its affiliates, subsidiaries, licensors, and
            their respective directors, officers, members, managers, employees, and agents from and against any and all
            claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you
            or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party
            claim to the extent arising from or connected with an allegation that your use of the Services in accordance
            with these Terms infringes any rights of a third party.
          </Text>
          <Title>10. Force Majeure</Title>
          <Text>
            10.1. LOOPStarter shall have no liability for delays, failure in performance, or interruption of service
            which result directly or indirectly from any cause or condition beyond our reasonable control, including but
            not limited to, any delay or failure due to any act of God, the act of civil or military authorities, the
            act of terrorists, civil disturbance, war, strike or other labor dispute, fire, interruption in
            telecommunications or Internet services or network provider services, failure of equipment and/or software,
            other catastrophe or any other occurrence which is beyond our reasonable control and shall not affect the
            validity and enforceability of any remaining provisions.
          </Text>
          <Text>
            10.2. You agree to indemnify and hold harmless LOOPStarter, its affiliates, subsidiaries, licensors, and
            their respective directors, officers, members, managers, employees, and agents from and against any and all
            claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you
            or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party
            claim to the extent arising from or connected with an allegation that your use of the Services in accordance
            with these Terms infringes any rights of a third party.
          </Text>
          <Title>11. Miscellaneous</Title>
          <Text>
            11.1. Severability: If a provision of this Agreement is or becomes illegal, invalid, or unenforceable in any
            jurisdiction, that shall not affect the validity or enforceability in that jurisdiction of any other
            provision hereof or the validity or enforceability in other jurisdictions of that or any other provision
            hereof.
          </Text>
          <Text>
            11.2. Assignment: LOOPStarter reserves the right to assign this Agreement, in whole or in part, at any time
            without notice. The User may not assign any of his/her rights or obligations under this Agreement.
          </Text>
          <Text>
            11.3. Third-Party Rights: Unless expressly provided to the contrary in this Agreement, a person who is not a
            party to this Agreement has no right to enforce or to enjoy the benefit of any term of this Agreement.
            Notwithstanding any term of this Agreement, no consent of any party who is not a party to this Agreement
            shall be required for the waiver, variation, or termination of any part of this Agreement.
          </Text>
          <Text padding="0 0 80px">
            11.4. Support and Notice: All notices, requests, demands, and determinations for LOOPStarter under these
            Terms (other than routine operational communications) shall be sent to{' '}
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

export default TermsOfServices
