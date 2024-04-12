<script>
import Layout from "@/layout/main.vue"
import pageheader from "@/components/page-header.vue"
import { basicData } from "./data-basic"
export default {
    name: "VANILA",
    data() {
        return {
            basicData
        }
    },
    components: {
        Layout, pageheader
    },
}
</script>

<template>
    <Layout>
        <pageheader title="Basic initialization" pageTitle="Table" />
        <BRow>
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Basic Table</h5>
                        <span class="d-block m-t-5">use class <code>table</code> inside table element</span>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <table class="table" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Ext.</th>
                                        <th>City</th>
                                        <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
                                        <th>Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in basicData" :key="item.id">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.id }}</td>
                                        <td>{{ item.location }}</td>
                                        <td>{{ item.birthDate }}</td>
                                        <td>{{ item.percentage }}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Joshua Weiss</td>
                                        <td>2289</td>
                                        <td>Saint-L�onard</td>
                                        <td>2010/15/01</td>
                                        <td>52%</td>
                                    </tr>
                                    <tr>
                                        <td>Kiona Lowery</td>
                                        <td>5952</td>
                                        <td>Inuvik</td>
                                        <td>2002/17/12</td>
                                        <td>72%</td>
                                    </tr>
                                    <tr>
                                        <td>Nina Rush</td>
                                        <td>7567</td>
                                        <td>Bo‘lhe</td>
                                        <td>2008/27/01</td>
                                        <td>6%</td>
                                    </tr>
                                    <tr>
                                        <td>Palmer Parker</td>
                                        <td>2000</td>
                                        <td>Stade</td>
                                        <td>2012/24/07</td>
                                        <td>58%</td>
                                    </tr>
                                    <tr>
                                        <td>Vielka Olsen</td>
                                        <td>3745</td>
                                        <td>Vrasene</td>
                                        <td>2016/08/01</td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <td>Meghan Cunningham</td>
                                        <td>8604</td>
                                        <td>Söke</td>
                                        <td>2007/16/02</td>
                                        <td>59%</td>
                                    </tr>
                                    <tr>
                                        <td>Iola Shaw</td>
                                        <td>6447</td>
                                        <td>Albany</td>
                                        <td>2014/05/03</td>
                                        <td>88%</td>
                                    </tr>
                                    <tr>
                                        <td>Imelda Cole</td>
                                        <td>4564</td>
                                        <td>Haasdonk</td>
                                        <td>2007/16/11</td>
                                        <td>79%</td>
                                    </tr>
                                    <tr>
                                        <td>Jerry Beach</td>
                                        <td>6801</td>
                                        <td>Gattatico</td>
                                        <td>1999/07/07</td>
                                        <td>36%</td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Rocha</td>
                                        <td>3938</td>
                                        <td>Gavorrano</td>
                                        <td>2000/06/08</td>
                                        <td>71%</td>
                                    </tr>
                                    <tr>
                                        <td>Derek Kerr</td>
                                        <td>1724</td>
                                        <td>Gualdo Cattaneo</td>
                                        <td>2014/21/01</td>
                                        <td>89%</td>
                                    </tr>
                                    <tr>
                                        <td>Shad Hudson</td>
                                        <td>5944</td>
                                        <td>Salamanca</td>
                                        <td>2014/10/12</td>
                                        <td>98%</td>
                                    </tr>
                                    <tr>
                                        <td>Daryl Ayers</td>
                                        <td>8276</td>
                                        <td>Barchi</td>
                                        <td>2012/12/11</td>
                                        <td>88%</td>
                                    </tr>
                                    <tr>
                                        <td>Caleb Livingston</td>
                                        <td>3094</td>
                                        <td>Fatehpur</td>
                                        <td>2014/13/02</td>
                                        <td>8%</td>
                                    </tr>
                                    <tr>
                                        <td>Sydney Meyer</td>
                                        <td>4576</td>
                                        <td>Neubrandenburg</td>
                                        <td>2015/06/02</td>
                                        <td>22%</td>
                                    </tr>
                                    <tr>
                                        <td>Lani Lawrence</td>
                                        <td>8501</td>
                                        <td>Turnhout</td>
                                        <td>2008/07/05</td>
                                        <td>16%</td>
                                    </tr>
                                    <tr>
                                        <td>Allegra Shepherd</td>
                                        <td>2576</td>
                                        <td>Meeuwen-Gruitrode</td>
                                        <td>2004/19/04</td>
                                        <td>41%</td>
                                    </tr>
                                    <tr>
                                        <td>Fallon Reyes</td>
                                        <td>3178</td>
                                        <td>Monceau-sur-Sambre</td>
                                        <td>2005/15/02</td>
                                        <td>16%</td>
                                    </tr>
                                    <tr>
                                        <td>Karen Whitley</td>
                                        <td>4357</td>
                                        <td>Sluis</td>
                                        <td>2003/02/05</td>
                                        <td>23%</td>
                                    </tr>
                                    <tr>
                                        <td>Stewart Stephenson</td>
                                        <td>5350</td>
                                        <td>Villa Faraldi</td>
                                        <td>2003/05/07</td>
                                        <td>65%</td>
                                    </tr>
                                    <tr>
                                        <td>Ursula Reynolds</td>
                                        <td>7544</td>
                                        <td>Southampton</td>
                                        <td>1999/16/12</td>
                                        <td>61%</td>
                                    </tr>
                                    <tr>
                                        <td>Adrienne Winters</td>
                                        <td>4425</td>
                                        <td>Laguna Blanca</td>
                                        <td>2014/15/09</td>
                                        <td>24%</td>
                                    </tr>
                                    <tr>
                                        <td>Francesca Brock</td>
                                        <td>1337</td>
                                        <td>Oban</td>
                                        <td>2000/12/06</td>
                                        <td>90%</td>
                                    </tr>
                                    <tr>
                                        <td>Ursa Davenport</td>
                                        <td>7629</td>
                                        <td>New Plymouth</td>
                                        <td>2013/27/06</td>
                                        <td>37%</td>
                                    </tr>
                                    <tr>
                                        <td>Mark Brock</td>
                                        <td>3310</td>
                                        <td>Veenendaal</td>
                                        <td>2006/08/09</td>
                                        <td>41%</td>
                                    </tr>
                                    <tr>
                                        <td>Dale Rush</td>
                                        <td>5050</td>
                                        <td>Chicoutimi</td>
                                        <td>2000/27/03</td>
                                        <td>2%</td>
                                    </tr>
                                    <tr>
                                        <td>Shellie Murphy</td>
                                        <td>3845</td>
                                        <td>Marlborough</td>
                                        <td>2013/13/11</td>
                                        <td>72%</td>
                                    </tr>
                                    <tr>
                                        <td>Porter Nicholson</td>
                                        <td>4539</td>
                                        <td>Bismil</td>
                                        <td>2012/22/10</td>
                                        <td>23%</td>
                                    </tr>
                                    <tr>
                                        <td>Oliver Huber</td>
                                        <td>1265</td>
                                        <td>Hannche</td>
                                        <td>2002/11/01</td>
                                        <td>94%</td>
                                    </tr>
                                    <tr>
                                        <td>Calista Maynard</td>
                                        <td>3315</td>
                                        <td>Pozzuolo del Friuli</td>
                                        <td>2006/23/03</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>Lois Vargas</td>
                                        <td>6825</td>
                                        <td>Cumberland</td>
                                        <td>1999/25/04</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td>Hermione Dickson</td>
                                        <td>2785</td>
                                        <td>Woodstock</td>
                                        <td>2001/22/03</td>
                                        <td>2%</td>
                                    </tr>
                                    <tr>
                                        <td>Dalton Jennings</td>
                                        <td>5416</td>
                                        <td>Dudzele</td>
                                        <td>2015/09/02</td>
                                        <td>74%</td>
                                    </tr>
                                    <tr>
                                        <td>Cathleen Kramer</td>
                                        <td>3380</td>
                                        <td>Crowsnest Pass</td>
                                        <td>2012/27/07</td>
                                        <td>53%</td>
                                    </tr>
                                    <tr>
                                        <td>Zachery Morgan</td>
                                        <td>6730</td>
                                        <td>Collines-de-l'Outaouais</td>
                                        <td>2006/04/09</td>
                                        <td>51%</td>
                                    </tr>
                                    <tr>
                                        <td>Yoko Freeman</td>
                                        <td>4077</td>
                                        <td>Lidköping</td>
                                        <td>2002/27/12</td>
                                        <td>48%</td>
                                    </tr>
                                    <tr>
                                        <td>Chaim Waller</td>
                                        <td>4240</td>
                                        <td>North Shore</td>
                                        <td>2010/25/07</td>
                                        <td>25%</td>
                                    </tr>
                                    <tr>
                                        <td>Berk Johnston</td>
                                        <td>4532</td>
                                        <td>Vergnies</td>
                                        <td>2016/23/02</td>
                                        <td>93%</td>
                                    </tr>
                                    <tr>
                                        <td>Tad Munoz</td>
                                        <td>2902</td>
                                        <td>Saint-Nazaire</td>
                                        <td>2010/09/05</td>
                                        <td>65%</td>
                                    </tr>
                                    <tr>
                                        <td>Vivien Dominguez</td>
                                        <td>5653</td>
                                        <td>Bargagli</td>
                                        <td>2001/09/01</td>
                                        <td>86%</td>
                                    </tr>
                                    <tr>
                                        <td>Carissa Lara</td>
                                        <td>3241</td>
                                        <td>Sherborne</td>
                                        <td>2015/07/12</td>
                                        <td>72%</td>
                                    </tr>
                                    <tr>
                                        <td>Hammett Gordon</td>
                                        <td>8101</td>
                                        <td>Wah</td>
                                        <td>1998/06/09</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>Walker Nixon</td>
                                        <td>6901</td>
                                        <td>Metz</td>
                                        <td>2011/12/11</td>
                                        <td>41%</td>
                                    </tr>
                                    <tr>
                                        <td>Nathan Espinoza</td>
                                        <td>5956</td>
                                        <td>Strathcona County</td>
                                        <td>2002/25/01</td>
                                        <td>47%</td>
                                    </tr>
                                    <tr>
                                        <td>Kelly Cameron</td>
                                        <td>4836</td>
                                        <td>Fontaine-Valmont</td>
                                        <td>1999/02/07</td>
                                        <td>24%</td>
                                    </tr>
                                    <tr>
                                        <td>Kyra Moses</td>
                                        <td>3796</td>
                                        <td>Quenast</td>
                                        <td>1998/07/07</td>
                                        <td>68%</td>
                                    </tr>
                                    <tr>
                                        <td>Grace Bishop</td>
                                        <td>8340</td>
                                        <td>Rodez</td>
                                        <td>2012/02/10</td>
                                        <td>4%</td>
                                    </tr>
                                    <tr>
                                        <td>Haviva Hernandez</td>
                                        <td>8136</td>
                                        <td>Suwałki</td>
                                        <td>2000/30/01</td>
                                        <td>16%</td>
                                    </tr>
                                    <tr>
                                        <td>Alisa Horn</td>
                                        <td>9853</td>
                                        <td>Ucluelet</td>
                                        <td>2007/01/11</td>
                                        <td>39%</td>
                                    </tr>
                                    <tr>
                                        <td>Zelenia Roman</td>
                                        <td>7516</td>
                                        <td>Redwater</td>
                                        <td>2012/03/03</td>
                                        <td>31%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </BRow>
    </Layout>
</template>