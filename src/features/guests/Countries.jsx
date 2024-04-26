import styled from "styled-components";

import DropdownMenu from "../../ui/customInputs/DropdownMenu";
import FormErrorMsg from "../../ui/form/FormErrorMsg";

const Div = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;
  gap: 2.4rem;

  &:first-child {
    padding-top: 0;
  }

  & > :last-child {
    grid-column: 1 / span 2;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      & > * {
        flex-basis: 100%;
        width: 100%;
      }
    }
  }
`;

const Container = styled.div`
  position: relative;
  padding: 1.2rem 0rem;
  padding-bottom: ${(props) => props.$pad && "3rem"};
  border-bottom: 1px solid var(--color-grey-200);
  & > span {
    bottom: 0rem;
  }
`;

function Countries({ errMsg, setter, country, value }) {
  return (
    <Container $pad={errMsg}>
      <Div>
        <DropdownMenu
          label="Select the country"
          setValue={setter}
          activeOption={country}
          activeValue={value}
        >
          <DropdownMenu.Select>
            <DropdownMenu.Option value={`Afghanistan, AF`}>
              Afghanistan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Aland Islands, AX`}>
              Aland Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Albania, AL`}>
              Albania
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Algeria, DZ`}>
              Algeria
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`American Samoa, AS`}>
              American Samoa
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Andorra, AD`}>
              Andorra
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Angola, AO`}>
              Angola
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Anguilla, AI`}>
              Anguilla
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Antarctica, AQ`}>
              Antarctica
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Antigua and Barbuda, AG`}>
              Antigua and Barbuda
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Argentina, AR`}>
              Argentina
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Armenia, AM`}>
              Armenia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Aruba, AW`}>Aruba</DropdownMenu.Option>
            <DropdownMenu.Option value={`Australia, AU`}>
              Australia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Austria, AT`}>
              Austria
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Azerbaijan, AZ`}>
              Azerbaijan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bahamas, BS`}>
              Bahamas
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bahrain, BH`}>
              Bahrain
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bangladesh, BD`}>
              Bangladesh
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Barbados, BB`}>
              Barbados
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Belarus, BY`}>
              Belarus
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Belgium, BE`}>
              Belgium
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Belize, BZ`}>
              Belize
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Benin, BJ`}>Benin</DropdownMenu.Option>
            <DropdownMenu.Option value={`Bermuda, BM`}>
              Bermuda
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bhutan, BT`}>
              Bhutan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bolivia, BO`}>
              Bolivia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bonaire, Sint Eustatius and Saba, BQ`}>
              Bonaire, Sint Eustatius and Saba
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bosnia and Herzegovina, BA`}>
              Bosnia and Herzegovina
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Botswana, BW`}>
              Botswana
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bouvet Island, BV`}>
              Bouvet Island
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Brazil, BR`}>
              Brazil
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`British Indian Ocean Territory, IO`}>
              British Indian Ocean Territory
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Brunei Darussalam, BN`}>
              Brunei Darussalam
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Bulgaria, BG`}>
              Bulgaria
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Burkina Faso, BF`}>
              Burkina Faso
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Burundi, BI`}>
              Burundi
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cambodia, KH`}>
              Cambodia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cameroon, CM`}>
              Cameroon
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Canada, CA`}>
              Canada
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cape Verde, CV`}>
              Cape Verde
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cayman Islands, KY`}>
              Cayman Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Central African Republic, CF`}>
              Central African Republic
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Chad, TD`}>Chad</DropdownMenu.Option>
            <DropdownMenu.Option value={`Chile, CL`}>Chile</DropdownMenu.Option>
            <DropdownMenu.Option value={`China, CN`}>China</DropdownMenu.Option>
            <DropdownMenu.Option value={`Christmas Island, CX`}>
              Christmas Island
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cocos (Keeling) Islands, CC`}>
              Cocos (Keeling) Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Colombia, CO`}>
              Colombia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Comoros, KM`}>
              Comoros
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Congo, CG`}>Congo</DropdownMenu.Option>
            <DropdownMenu.Option
              value={`Congo, Democratic Republic of the Congo, CD`}
            >
              Congo, Democratic Republic of the Congo
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cook Islands, CK`}>
              Cook Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Costa Rica, CR`}>
              Costa Rica
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cote D'Ivoire, CI`}>
              Cote D&apos;Ivoire
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Croatia, HR`}>
              Croatia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cuba, CU`}>Cuba</DropdownMenu.Option>
            <DropdownMenu.Option value={`Curacao, CW`}>
              Curacao
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Cyprus, CY`}>
              Cyprus
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Czech Republic, CZ`}>
              Czech Republic
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Denmark, DK`}>
              Denmark
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Djibouti, DJ`}>
              Djibouti
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Dominica, DM`}>
              Dominica
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Dominican Republic, DO`}>
              Dominican Republic
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Ecuador, EC`}>
              Ecuador
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Egypt, EG`}>Egypt</DropdownMenu.Option>
            <DropdownMenu.Option value={`El Salvador, SV`}>
              El Salvador
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Equatorial Guinea, GQ`}>
              Equatorial Guinea
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Eritrea, ER`}>
              Eritrea
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Estonia, EE`}>
              Estonia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Ethiopia, ET`}>
              Ethiopia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Falkland Islands (Malvinas), FK`}>
              Falkland Islands (Malvinas)
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Faroe Islands, FO`}>
              Faroe Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Fiji, FJ`}>Fiji</DropdownMenu.Option>
            <DropdownMenu.Option value={`Finland, FI`}>
              Finland
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`France, FR`}>
              France
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`French Guiana, GF`}>
              French Guiana
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`French Polynesia, PF`}>
              French Polynesia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`French Southern Territories, TF`}>
              French Southern Territories
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Gabon, GA`}>Gabon</DropdownMenu.Option>
            <DropdownMenu.Option value={`Gambia, GM`}>
              Gambia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Georgia, GE`}>
              Georgia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Germany, DE`}>
              Germany
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Ghana, GH`}>Ghana</DropdownMenu.Option>
            <DropdownMenu.Option value={`Gibraltar, GI`}>
              Gibraltar
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Greece, GR`}>
              Greece
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Greenland, GL`}>
              Greenland
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Grenada, GD`}>
              Grenada
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Guadeloupe, GP`}>
              Guadeloupe
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Guam, GU`}>Guam</DropdownMenu.Option>
            <DropdownMenu.Option value={`Guatemala, GT`}>
              Guatemala
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Guernsey, GG`}>
              Guernsey
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Guinea, GN`}>
              Guinea
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Guinea-Bissau, GW`}>
              Guinea-Bissau
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Guyana, GY`}>
              Guyana
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Haiti, HT`}>Haiti</DropdownMenu.Option>
            <DropdownMenu.Option
              value={`Heard Island and Mcdonald Islands, HM`}
            >
              Heard Island and Mcdonald Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Holy See (Vatican City State), VA`}>
              Holy See (Vatican City State)
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Honduras, HN`}>
              Honduras
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Hong Kong, HK`}>
              Hong Kong
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Hungary, HU`}>
              Hungary
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Iceland, IS`}>
              Iceland
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`India, IN`}>India</DropdownMenu.Option>
            <DropdownMenu.Option value={`Indonesia, ID`}>
              Indonesia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Iran, Islamic Republic of, IR`}>
              Iran, Islamic Republic of
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Iraq, IQ`}>Iraq</DropdownMenu.Option>
            <DropdownMenu.Option value={`Ireland, IE`}>
              Ireland
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Isle of Man, IM`}>
              Isle of Man
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Israel, IL`}>
              Israel
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Italy, IT`}>Italy</DropdownMenu.Option>
            <DropdownMenu.Option value={`Jamaica, JM`}>
              Jamaica
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Japan, JP`}>Japan</DropdownMenu.Option>
            <DropdownMenu.Option value={`Jersey, JE`}>
              Jersey
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Jordan, JO`}>
              Jordan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Kazakhstan, KZ`}>
              Kazakhstan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Kenya, KE`}>Kenya</DropdownMenu.Option>
            <DropdownMenu.Option value={`Kiribati, KI`}>
              Kiribati
            </DropdownMenu.Option>
            <DropdownMenu.Option
              value={`Korea, Democratic People's Republic of, KP`}
            >
              Korea, Democratic People&apos;s Republic of
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Korea, Republic of, KR`}>
              Korea, Republic of
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Kosovo, XK`}>
              Kosovo
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Kuwait, KW`}>
              Kuwait
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Kyrgyzstan, KG`}>
              Kyrgyzstan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Lao People's Democratic Republic, LA`}>
              Lao People&apos;s Democratic Republic
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Latvia, LV`}>
              Latvia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Lebanon, LB`}>
              Lebanon
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Lesotho, LS`}>
              Lesotho
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Liberia, LR`}>
              Liberia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Libyan Arab Jamahiriya, LY`}>
              Libyan Arab Jamahiriya
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Liechtenstein, LI`}>
              Liechtenstein
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Lithuania, LT`}>
              Lithuania
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Luxembourg, LU`}>
              Luxembourg
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Macao, MO`}>Macao</DropdownMenu.Option>
            <DropdownMenu.Option
              value={`Macedonia, the Former Yugoslav Republic of, MK`}
            >
              Macedonia, the Former Yugoslav Republic of
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Madagascar, MG`}>
              Madagascar
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Malawi, MW`}>
              Malawi
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Malaysia, MY`}>
              Malaysia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Maldives, MV`}>
              Maldives
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Mali, ML`}>Mali</DropdownMenu.Option>
            <DropdownMenu.Option value={`Malta, MT`}>Malta</DropdownMenu.Option>
            <DropdownMenu.Option value={`Marshall Islands, MH`}>
              Marshall Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Martinique, MQ`}>
              Martinique
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Mauritania, MR`}>
              Mauritania
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Mauritius, MU`}>
              Mauritius
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Mayotte, YT`}>
              Mayotte
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Mexico, MX`}>
              Mexico
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Micronesia, Federated States of, FM`}>
              Micronesia, Federated States of
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Moldova, Republic of, MD`}>
              Moldova, Republic of
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Monaco, MC`}>
              Monaco
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Mongolia, MN`}>
              Mongolia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Montenegro, ME`}>
              Montenegro
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Montserrat, MS`}>
              Montserrat
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Morocco, MA`}>
              Morocco
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Mozambique, MZ`}>
              Mozambique
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Myanmar, MM`}>
              Myanmar
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Namibia, NA`}>
              Namibia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Nauru, NR`}>Nauru</DropdownMenu.Option>
            <DropdownMenu.Option value={`Nepal, NP`}>Nepal</DropdownMenu.Option>
            <DropdownMenu.Option value={`Netherlands, NL`}>
              Netherlands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Netherlands Antilles, AN`}>
              Netherlands Antilles
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`New Caledonia, NC`}>
              New Caledonia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`New Zealand, NZ`}>
              New Zealand
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Nicaragua, NI`}>
              Nicaragua
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Niger, NE`}>Niger</DropdownMenu.Option>
            <DropdownMenu.Option value={`Nigeria, NG`}>
              Nigeria
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Niue, NU`}>Niue</DropdownMenu.Option>
            <DropdownMenu.Option value={`Norfolk Island, NF`}>
              Norfolk Island
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Northern Mariana Islands, MP`}>
              Northern Mariana Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Norway, NO`}>
              Norway
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Oman, OM`}>Oman</DropdownMenu.Option>
            <DropdownMenu.Option value={`Pakistan, PK`}>
              Pakistan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Palau, PW`}>Palau</DropdownMenu.Option>
            <DropdownMenu.Option value={`Palestinian Territory, Occupied, PS`}>
              Palestinian Territory, Occupied
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Panama, PA`}>
              Panama
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Papua New Guinea, PG`}>
              Papua New Guinea
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Paraguay, PY`}>
              Paraguay
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Peru, PE`}>Peru</DropdownMenu.Option>
            <DropdownMenu.Option value={`Philippines, PH`}>
              Philippines
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Pitcairn, PN`}>
              Pitcairn
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Poland, PL`}>
              Poland
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Portugal, PT`}>
              Portugal
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Puerto Rico, PR`}>
              Puerto Rico
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Qatar, QA`}>Qatar</DropdownMenu.Option>
            <DropdownMenu.Option value={`Reunion, RE`}>
              Reunion
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Romania, RO`}>
              Romania
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Russian Federation, RU`}>
              Russian Federation
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Rwanda, RW`}>
              Rwanda
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saint Barthelemy, BL`}>
              Saint Barthelemy
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saint Helena, SH`}>
              Saint Helena
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saint Kitts and Nevis, KN`}>
              Saint Kitts and Nevis
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saint Lucia, LC`}>
              Saint Lucia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saint Martin, MF`}>
              Saint Martin
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saint Pierre and Miquelon, PM`}>
              Saint Pierre and Miquelon
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saint Vincent and the Grenadines, VC`}>
              Saint Vincent and the Grenadines
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Samoa, WS`}>Samoa</DropdownMenu.Option>
            <DropdownMenu.Option value={`San Marino, SM`}>
              San Marino
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Sao Tome and Principe, ST`}>
              Sao Tome and Principe
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Saudi Arabia, SA`}>
              Saudi Arabia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Senegal, SN`}>
              Senegal
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Serbia, RS`}>
              Serbia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Serbia and Montenegro, CS`}>
              Serbia and Montenegro
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Seychelles, SC`}>
              Seychelles
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Sierra Leone, SL`}>
              Sierra Leone
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Singapore, SG`}>
              Singapore
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Sint Maarten, SX`}>
              Sint Maarten
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Slovakia, SK`}>
              Slovakia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Slovenia, SI`}>
              Slovenia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Solomon Islands, SB`}>
              Solomon Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Somalia, SO`}>
              Somalia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`South Africa, ZA`}>
              South Africa
            </DropdownMenu.Option>
            <DropdownMenu.Option
              value={`South Georgia and the South Sandwich Islands, GS`}
            >
              South Georgia and the South Sandwich Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`South Sudan, SS`}>
              South Sudan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Spain, ES`}>Spain</DropdownMenu.Option>
            <DropdownMenu.Option value={`Sri Lanka, LK`}>
              Sri Lanka
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Sudan, SD`}>Sudan</DropdownMenu.Option>
            <DropdownMenu.Option value={`Suriname, SR`}>
              Suriname
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Svalbard and Jan Mayen, SJ`}>
              Svalbard and Jan Mayen
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Swaziland, SZ`}>
              Swaziland
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Sweden, SE`}>
              Sweden
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Switzerland, CH`}>
              Switzerland
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Syrian Arab Republic, SY`}>
              Syrian Arab Republic
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Taiwan, Province of China, TW`}>
              Taiwan, Province of China
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Tajikistan, TJ`}>
              Tajikistan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Tanzania, United Republic of, TZ`}>
              Tanzania, United Republic of
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Thailand, TH`}>
              Thailand
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Timor-Leste, TL`}>
              Timor-Leste
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Togo, TG`}>Togo</DropdownMenu.Option>
            <DropdownMenu.Option value={`Tokelau, TK`}>
              Tokelau
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Tonga, TO`}>Tonga</DropdownMenu.Option>
            <DropdownMenu.Option value={`Trinidad and Tobago, TT`}>
              Trinidad and Tobago
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Tunisia, TN`}>
              Tunisia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Turkey, TR`}>
              Turkey
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Turkmenistan, TM`}>
              Turkmenistan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Turks and Caicos Islands, TC`}>
              Turks and Caicos Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Tuvalu, TV`}>
              Tuvalu
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Uganda, UG`}>
              Uganda
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Ukraine, UA`}>
              Ukraine
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`United Arab Emirates, AE`}>
              United Arab Emirates
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`United Kingdom, GB`}>
              United Kingdom
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`United States, US`}>
              United States
            </DropdownMenu.Option>
            <DropdownMenu.Option
              value={`United States Minor Outlying Islands, UM`}
            >
              United States Minor Outlying Islands
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Uruguay, UY`}>
              Uruguay
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Uzbekistan, UZ`}>
              Uzbekistan
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Vanuatu, VU`}>
              Vanuatu
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Venezuela, VE`}>
              Venezuela
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Viet Nam, VN`}>
              Viet Nam
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Virgin Islands, British, VG`}>
              Virgin Islands, British
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Virgin Islands, U.s., VI`}>
              Virgin Islands, U.s.
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Wallis and Futuna, WF`}>
              Wallis and Futuna
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Western Sahara, EH`}>
              Western Sahara
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Yemen, YE`}>Yemen</DropdownMenu.Option>
            <DropdownMenu.Option value={`Zambia, ZM`}>
              Zambia
            </DropdownMenu.Option>
            <DropdownMenu.Option value={`Zimbabwe, ZW`}>
              Zimbabwe
            </DropdownMenu.Option>
          </DropdownMenu.Select>
          <DropdownMenu.SearchInput
            id="searchSelect"
            name="searchSelect"
            placeholder="Search for a country"
          />
        </DropdownMenu>
      </Div>
      {errMsg && <FormErrorMsg>{errMsg}</FormErrorMsg>}
    </Container>
  );
}

export default Countries;
