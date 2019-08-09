<template>
    <div>
        <div>
            <span class="title text--primary">{{basicInfo.ChName}}</span><span>/{{basicInfo.EngName}}</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {pData} from '../js/wanganshi'

    export default {
        name: "AuthorDetail",
        props: {
            chName: ''
        },
        data() {
            return {
                basicInfo: {},
                personSources: {},
                personAliases: [],
                personAddresses: {},
                personEntryInfo: {},
                personPostings: [],
                personSocialStatus: [],
                personKinshipInfo: [],
                personSocialAssociation: [],
                personTexts: [],
            }
        },
        methods: {
            showAuthorInfo() {
                let self = this;
                // let authorName = self.chName;
                // // let url = 'https://cbdb.fas.harvard.edu/cbdbapi/person.php?name=' + authorName +'&o=json';
                // let url = '/getAuthor?name=' + authorName + '&o=json';
                // axios.get(url)
                //     .then(res => {
                //         let data = res.data;
                //         let person = data.Package.PersonAuthority.PersonInfo.Person;
                //         self.basicInfo = person.BasicInfo;
                //         self.personSources = person.PersonSources;
                //         self.personAliases = person.PersonAliases.Alias;
                //         self.personAddresses = person.PersonAddresses;
                //         self.personEntryInfo = person.PersonEntryInfo;
                //         self.personPostings = person.PersonPostings.Posting;
                //         self.personSocialStatus = person.PersonSocialStatus.SocialStatus;
                //         self.personKinshipInfo = person.PersonKinshipInfo.Kinship;
                //         self.personSocialAssociation = person.PersonSocialAssociation.Association;
                //         self.personTexts = person.PersonTexts.Text;
                //     })
                //     .catch(err => {
                //
                //     })


                let data = pData;
                let person = data.Package.PersonAuthority.PersonInfo.Person;
                self.basicInfo = person.BasicInfo;
                self.personSources = person.PersonSources;
                self.personAliases = person.PersonAliases.Alias;
                self.personAddresses = person.PersonAddresses;
                self.personEntryInfo = person.PersonEntryInfo;
                self.personPostings = person.PersonPostings.Posting;
                self.personSocialStatus = person.PersonSocialStatus.SocialStatus;
                self.personKinshipInfo = person.PersonKinshipInfo.Kinship;
                self.personSocialAssociation = person.PersonSocialAssociation.Association;
                self.personTexts = person.PersonTexts.Text;
            }
        },
        created() {
            let self = this;
            self.showAuthorInfo();
        }
    }
</script>

<style scoped>

</style>